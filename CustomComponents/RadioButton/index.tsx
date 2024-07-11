import { Text, TouchableOpacity, View } from 'react-native';
import SRadioButton from './RadioButton.styles';
import { palette } from '@/components/styles/theme';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import Tooltip from 'react-native-walkthrough-tooltip';
import { useState } from 'react';

interface RadioButtonProps {
  label: string | number;
  selected: boolean;
  onClick: () => void;
  disable?: { value: string, message: string };
}
interface RadioButtonGroupProps {
  options: string[] | number[];
  selectedValue: string | number | null;
  onChange: (option: string | number) => void;
  disable?: { value: string, message: string }[];
}

const RadioButton = ({ label, selected, onClick, disable }: RadioButtonProps) => {
  const [toolTipVisible, setToolTipVisible] = useState(false);
  return (
    <TouchableOpacity
      style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}
      disabled={label === disable?.value}
      onPress={onClick}>
      <View
        style={[
          SRadioButton.circle,
          {
            borderColor: label === disable?.value ? palette.lightGrey : selected ? palette.darkBlue : palette.black,
          },
        ]}>
        {selected && <View style={SRadioButton.selected} />}
      </View>
      <Text style={[SRadioButton.label, { color: label === disable?.value ? 'lightgray' : palette.black }]}>{label}</Text>
      {label === disable?.value && (
        <Tooltip
          isVisible={toolTipVisible}
          content={<Text style={SRadioButton.toolTipText}>{disable.message}</Text>}
          placement='right'
          onClose={() => setToolTipVisible(false)}
          backgroundColor='rgba(0, 0, 0, 0.1)'
          contentStyle={[SRadioButton.toolTipContainer, { height: disable.message.length * 0.9 }]}
        >
          <TouchableOpacity onPress={() => setToolTipVisible(true)}>
            <FontAwesomeIcon icon={faQuestionCircle} style={SRadioButton.icon} />
          </TouchableOpacity>
        </Tooltip>
      )}
    </TouchableOpacity>
  );
};

const RadioButtonGroup = ({
  options,
  selectedValue,
  onChange,
  disable,
}: RadioButtonGroupProps) => {
  return (
    <View>
      {options.map((option, i) => (
        <RadioButton
          key={i}
          label={option}
          selected={option === selectedValue}
          onClick={() => onChange(option)}
          disable={disable && disable?.length > 0 ? disable[i] : undefined}
        />
      ))}
    </View>
  );
};

export default RadioButtonGroup;
