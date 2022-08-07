import { View, Button, StyleSheet } from 'react-native';
import { Formik, useField } from 'formik';
import StyledTextInput from '../Text/StyledTextInput';
import { loginValidationSchema } from '../validationSchemas/login';
import StyledText from '../Text/StyledText';

const initialValues = {
  email: '',
  password: '',
};

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontSize: 10,
    marginBottom: 20,
    marginTop: -5,
  },
  form: {
    margin: 12,
  },
});

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name); // meta = metainformación del campo: validaciones, errores...

  return (
    <>
      <StyledTextInput
        error={meta.error}
        value={field.value}
        onChangeText={(value) => helpers.setValue(value)}
        {...props}
      />
      {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
    </>
  );
};

export const LoginPage = () => {
  return (
    <Formik
      validationSchema={loginValidationSchema}
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleSubmit }) => {
        return (
          <View style={styles.form}>
            <FormikInputValue name="email" placeholder="E-mail" />
            <FormikInputValue name="password" placeholder="Password" secureTextEntry />
            <Button onPress={handleSubmit} title="Log in" />
          </View>
        );
      }}
    </Formik>
  );
};

export default LoginPage;
