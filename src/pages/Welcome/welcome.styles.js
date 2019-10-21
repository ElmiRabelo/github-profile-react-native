import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../styles/index.styles';

export const barColor = colors.secundary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: colors.secundary,
    padding: metrics.basePadding * 2,
  },
  title: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
  },
  text: {
    textAlign: 'center',
    marginTop: metrics.baseMargin,
    fontSize: 15,
    color: colors.light,
    lineHeight: 21,
  },
  form: {
    marginTop: metrics.baseMargin * 2,
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: metrics.borderRadius,
    height: 44,
    paddingHorizontal: metrics.basePadding,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: metrics.borderRadius,
    height: 44,
    marginTop: metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 1,
  },
  error: {
    color: colors.danger,
    textAlign: 'center',
    marginTop: metrics.baseMargin,
  },
});

export default styles;
