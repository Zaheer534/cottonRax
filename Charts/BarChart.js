import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BarChart} from 'react-native-chart-kit';
import {Line, Svg} from 'react-native-svg';

const data = {
  labels: [
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
    'Jan',
    'Feb',
    'Mar',
    'April',
    'may',
    'jun',
    'july',
  ],
  datasets: [
    {
      data: [100, 93, 1, 65, 1, 1, 1, 1, 37, 20, 35, 1],
      colors: [
        () => 'green',
        () => 'green',
        () => 'green',
        () => 'green',
        () => 'green',
        () => 'green',
        () => 'green',
        () => 'green',
        () => 'green',
        () => 'green',
        () => 'green',
        () => 'green',
      ],
      yValue: [() => '0', () => '31', () => '62', () => '92', () => '123'],
    },
  ],
};

const minValue = 0;

function* yLabel() {
  yield* [minValue, 31, 62, 92, 123];
}

const BarChartComponent = () => {
  const yAxisLabels = [0, 31, 62, 92];
  const yLabelIterator = yLabel();

  return (
    <View
      style={{
        margin: 100,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
      }}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Earnings</Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          right: 12,
        }}>
        <BarChart
          data={data}
          width={350}
          height={210}
          yAxisLabel="£"
          showBarTops={false}
          fromZero={true}
          verticalLabelRotation={268}
          barPercentage={1}
          withCustomBarColorFromData
          flatColor
          chartConfig={{
            backgroundColor: 'trasnparent',
            backgroundGradientFromOpacity: 0,
            backgroundGradientToOpacity: 0,
            fillShadowGradient: 'green',
            fillShadowGradientOpacity: 1,
            color: () => 'rgb(3, 43, 21)',
            flatColor: true,
            strokeWidth: 3,
            decimalPlaces: 0,
            barPercentage: 0.4,
            useShadowColorFromDataset: false,
            propsForBackgroundLines: {
              strokeWidth: 1,
              stroke: '#efefef',
              strokeDasharray: '0',
              x1: '70',
            },
            propsForVerticalLabels: {
              fill: 'rgba(138, 138, 138, 1)',
              textAnchor: 'middle',
            },
            propsForHorizontalLabels: {
              fill: 'rgba(138, 138, 138, 1)',
              textAnchor: 'end',
            },
            formatYLabel: () => yLabelIterator.next().value,
            data: data.datasets,
          }}
          yAxisMax={123}
        />
      </View>
    </View>
  );
};

export default BarChartComponent;

const styles = StyleSheet.create({
  titleContainer: {
    // alignSelf: 'center',
    // justifyContent: 'center',
    alignItems: 'flex-start',
  },
  titleText: {
    right: 140,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    color: 'rgba(0, 0, 0, 1)',
  },
});
