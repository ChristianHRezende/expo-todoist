import {zodResolver} from '@hookform/resolvers/zod';
import {Controller, useForm} from 'react-hook-form';
import {Alert, StyleSheet, View} from 'react-native';
import schema from './schema';
import {Button, HelperText, TextInput} from 'react-native-paper';
import {useMutation} from '@tanstack/react-query';
import {SignInParams, signIn} from '@/services/authServices';

export const SignIn = () => {
  const defaultFormValues = {
    email: '',
    password: '',
  };
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultFormValues,
  });

  // add react query
  // server data management
  // useQuery ou useMutation
  const mutateSignIn = useMutation({
    mutationFn: (params: SignInParams) => signIn(params),
  });

  const handleSubmitForm = form.handleSubmit(async values => {
    mutateSignIn.mutateAsync(values, {
      onSuccess: response => {
        console.log('success');
        Alert.alert('success');
        form.reset(defaultFormValues);
      },
      onError: error => {
        console.log(error);
        Alert.alert('error' + error);
      },
    });
  });

  return (
    <View style={styles.container}>
      <Controller
        control={form.control}
        name="email"
        render={field => (
          <>
            <TextInput
              testID="welcome-sign-in-input-email"
              mode="outlined"
              label="email"
              placeholder="email"
              onChangeText={field.field.onChange}
              value={field.field.value}
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
        render={field => (
          <>
            <TextInput
              testID="welcome-sign-in-input-password"
              mode="outlined"
              label="password"
              placeholder="password"
              onChangeText={field.field.onChange}
              value={field.field.value}
              secureTextEntry={true}
            />
            {form.formState.errors.password?.message ? (
              <HelperText type="error">
                {form.formState.errors.password?.message}
              </HelperText>
            ) : null}
          </>
        )}
      />
      <Button mode="contained" onPress={handleSubmitForm}>
        submit
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
});
