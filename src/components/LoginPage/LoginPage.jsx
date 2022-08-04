import { View, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import StyledTextInput from '../Text/StyledTextInput';

const initialValues = {
  email: '',
  password: '',
};

const styles = StyleSheet.create({
  form: {
    margin: 12,
  },
});

export const LoginPage = () => {
  return (
    <Formik initialValues={initialValues} onSubmit={(values) => console.log(values)}>
      {({ handleChange, handleBlur, handleSubmit, values }) => {
        return (
          <View style={styles.form}>
            <StyledTextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholder="E-mail"
            />
            <StyledTextInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder="Password"
            />

            <Button onPress={handleSubmit} title="Log in" />
          </View>
        );
      }}
    </Formik>
  );
};

export default LoginPage;
