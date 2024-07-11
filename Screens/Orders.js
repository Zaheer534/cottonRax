import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {activeOrderImgs, AppImages} from '../Constants/images';
import App from '../App';
import {
  activeOrdersData,
  completedOrdersData,
  requestData,
} from '../Constants/Keywords';
import {Divider} from '@rneui/themed';
import {act} from 'react-test-renderer';
import {useNavigation} from '@react-navigation/native';

const Orders = () => {
  const navigation = useNavigation();
  // const [selected, setSelected] = useState('');
  const [show, setShow] = useState(true);
  // view all
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(1);
  const [loadMoreVisible, setLoadMoreVisible] = useState(true);
  const [displayArray, setDisplayArray] = useState([]);

  //search data

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRequests, setFilteredRequests] = useState(requestData);
  const [filteredActiveOrders, setFilteredActiveOrders] =
    useState(activeOrdersData);
  const [filteredCompletedOrders, setFilteredCompletedOrders] =
    useState(completedOrdersData);

  useEffect(() => {
    perPage === 1 ? setPerPage(1) : setPerPage(2);
    setNewData();
  }, [page, perPage]);

  useEffect(() => {
    handleSearch();
  }, [searchQuery]);

  const setNewData = () => {
    let tempArray = [];
    if (requestData.length === displayArray.length) {
      setLoadMoreVisible(false);
    } else {
      for (let i = 0; i < page * perPage; i++) {
        tempArray.push(requestData[i]);
      }
      setDisplayArray(tempArray);
      setLoadMoreVisible(true);
      // setPerPage(true);
    }
  };

  const loadMore = () => {
    setPage(page + 1);
  };

  const showData = () => {
    if (show == false) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const handleSearch = () => {
    const filteredRequests = requestData.filter(
      item =>
        item.person.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.item.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setFilteredRequests(filteredRequests);

    const filteredActiveOrders = activeOrdersData.filter(
      item =>
        item.person.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.item.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setFilteredActiveOrders(filteredActiveOrders);

    const filteredCompletedOrders = completedOrdersData.filter(
      item =>
        item.person.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.item.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setFilteredCompletedOrders(filteredCompletedOrders);
  };

  const renderRequestData = ({item}) => {
    if (!item)
      return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 25}}>No item found</Text>
        </View>
      );
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('navigate order')}
        style={{
          flexDirection: 'row',
          margin: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
          // backgroundColor: 'green',
          // alignSelf: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            justifyContent: 'space-evenly',
          }}>
          <View>
            <Image source={item.ellipse} />
          </View>
          <View style={{}}>
            <Text style={styles.titleText}>{item.person}</Text>
            <Text style={styles.itemText}>{item.item}</Text>
            <TouchableOpacity style={styles.listBtn}>
              <Text style={[styles.btnText]}>{item.btn}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{right: 5}}>
          <Image source={item.right} />
        </View>
      </TouchableOpacity>
    );
  };

  const renderActiveOrders = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('navigate order')}
        style={{
          flexDirection: 'row',
          margin: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
          // alignSelf: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            justifyContent: 'space-evenly',
          }}>
          <View>
            <Image style={{height: 80}} source={item.img} />
          </View>
          <View style={{}}>
            <Text style={styles.titleText}>{item.person}</Text>
            <Text style={styles.itemText}>{item.item}</Text>
            <Text style={styles.itemText}>{item.date}</Text>
            <TouchableOpacity style={[styles.activeOrderBtn]}>
              <Text style={styles.btnText}>{item.btn}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{right: 5}}>
          <Image source={AppImages.requestImgs.right} />
        </View>
      </TouchableOpacity>
    );
  };

  const renderCompletedOrders = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('navigate order')}
        style={{
          flexDirection: 'row',
          margin: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
          // alignSelf: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            justifyContent: 'space-evenly',
          }}>
          <View>
            <Image style={{height: 80}} source={item.img} />
          </View>
          <View style={{}}>
            <Text style={styles.titleText}>{item.person}</Text>
            <Text style={styles.itemText}>{item.item}</Text>
            <Text style={styles.itemText}>{item.date}</Text>
            <TouchableOpacity
              style={[
                styles.completedOrderBtn,
                {
                  backgroundColor: 'rgba(230, 230, 230, 1)',
                  alignItems: 'center',
                },
              ]}>
              <Text style={styles.btnText}>{item.btn}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{right: 5}}>
          <Image source={AppImages.requestImgs.right} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.orderContianer}
            onPress={() => {
              navigation.navigate('Onboarding');
            }}>
            <Image source={AppImages.orderImgs.back} />
            <Text style={styles.orderText}>My Orders</Text>
          </TouchableOpacity>
          <View>
            <Image
              style={{marginHorizontal: 10}}
              source={AppImages.orderImgs.dollar}
            />
          </View>
        </View>

        <View style={styles.searchContainer}>
          <TouchableOpacity>
            <Image
              style={{marginHorizontal: 10}}
              source={AppImages.orderImgs.search}
            />
          </TouchableOpacity>
          <TextInput
            style={{width: '70%'}}
            placeholder="Search my transactions"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity>
            <Image source={AppImages.orderImgs.right} />
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.requestHeader}>
            <Text style={styles.listTitle}>Requests</Text>
            {loadMoreVisible && (
              <TouchableOpacity
                onPress={() => {
                  loadMore;
                  setPerPage(perPage - 1);
                  showData(true);
                  setDisplayArray([requestData[0]]);
                }}>
                <Text
                  style={[
                    styles.listTitle,
                    {
                      color: 'rgba(8, 55, 107, 1)',
                      textDecorationLine: 'underline',
                    },
                  ]}>
                  View all
                </Text>
              </TouchableOpacity>
            )}
          </View>

          <FlatList
            data={perPage === 1 ? [filteredRequests[0]] : filteredRequests}
            renderItem={renderRequestData}
            ListEmptyComponent={({item}) => {
              {
                if (!item && filteredRequests)
                  return (
                    <View
                      style={{
                        flex: 1,
                        alignSelf: 'center',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text style={{fontSize: 25}}>No item found</Text>
                    </View>
                  );
              }
            }}
          />
        </View>
        {show && (
          <>
            <Divider width={4} color="rgba(242, 242, 242, 1)" />
            <View>
              <View style={styles.requestHeader}>
                <Text style={styles.listTitle}>Active Orders</Text>
              </View>
              <FlatList
                data={filteredActiveOrders}
                ListEmptyComponent={({item}) => {
                  if (!item)
                    return (
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text style={{fontSize: 25}}>No item found</Text>
                      </View>
                    );
                }}
                renderItem={renderActiveOrders}
              />
            </View>
          </>
        )}

        {show && (
          <>
            <Divider width={4} color="rgba(242, 242, 242, 1)" />
            <View>
              <View style={styles.requestHeader}>
                <Text style={styles.listTitle}>Completed Orders</Text>
              </View>
              <FlatList
                data={filteredCompletedOrders}
                renderItem={renderCompletedOrders}
                ListEmptyComponent={({item}) => {
                  if (!item)
                    return (
                      <View
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Text style={{fontSize: 25}}>No item found</Text>
                      </View>
                    );
                }}
              />
            </View>
          </>
        )}
      </View>
    </>
  );
};

export default Orders;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderContianer: {
    margin: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderText: {
    fontSize: 24,
    fontWeight: '700',
    color: 'rgba(0, 0, 0, 1)',
    marginHorizontal: 20,
  },
  searchContainer: {
    margin: 10,
    backgroundColor: 'rgba(242, 242, 242, 1)',
    borderRadius: 24,
    padding: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  requestHeader: {
    margin: 10,
    marginVertical: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listTitle: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    color: 'rgba(0, 0, 0, 1)',
  },
  titleText: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    color: 'rgba(0, 0, 0, 1)',
  },
  itemText: {
    fontSize: 12,
    fontWeight: '500',
    // lineHeight: 18,
    color: 'rgba(0, 0, 0, 1)',
  },
  listBtn: {
    // width: '78%',
    marginTop: 5,
    backgroundColor: 'rgba(255, 243, 176, 1)',
    alignItems: 'center',
    borderRadius: 4,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 20,
    color: 'rgba(0, 0, 0, 1)',
  },
  activeOrderBtn: {
    width: '65%',
    marginTop: 5,
    backgroundColor: 'rgba(255, 243, 176, 1)',
    alignItems: 'center',
    borderRadius: 4,
  },
  completedOrderBtn: {
    width: '68%',
    marginTop: 5,
    backgroundColor: 'rgba(255, 243, 176, 1)',
    alignItems: 'center',
    borderRadius: 4,
  },
});
