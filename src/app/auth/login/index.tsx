import {View} from 'react-native';
import {Button, HelperText, TextInput} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import schema from './schema';

export const Login = () => {
  const defaultFormValues = {
    email: '',
    password: '',
  };

  // gerencia e muda estado de volta para default
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultFormValues,
  });

  const handleLoginSubmit = form.handleSubmit(async values => {
    console.log(values.email, values.password);
  });

  // fazer a parte do mutate que n entendi, e fazer os testes

  return (
    <View style={styles.contained}>
      <Controller
        control={form.control}
        name="email"
        render={({field}) => (
          <>
            <TextInput
              testID="email-log-in-input"
              mode="outlined"
              label="Email"
              placeholder="Email"
              onChangeText={field.onChange}
              value={field.value}
              keyboardType="email-address"
            />
            {form.formState.errors.email?.message ? (
              <HelperText type="error">
                {form.formState.errors.email?.message}
              </HelperText>
            ) : null}
          </>
        )}
      />
      <Controller
        control={form.control}
        name="password"
        render={({field}) => (
          <TextInput
            testID="password-log-in-input"
            mode="outlined"
            label="Senha"
            placeholder="Senha"
            onChangeText={field.onChange}
            value={field.value}
            secureTextEntry={true}
          />
        )}
      />
      <Button
        style={styles.buttonContainer}
        mode="contained"
        onPress={handleLoginSubmit}>
        Login
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  contained: {
    flex: 1,
    justifyContent: 'center',
    borderColor: 'gray',
    borderWidth: 1,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 10,
    marginHorizontal: 100,
  },
});

export default Login;
