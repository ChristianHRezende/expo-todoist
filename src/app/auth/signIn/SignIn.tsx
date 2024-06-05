import {Button} from '@/components/Button/Button';
import {zodResolver} from '@hookform/resolvers/zod';
import {Controller, useForm} from 'react-hook-form';
import {TextInput, View} from 'react-native';
import schema from './schema';

export const SignIn = () => {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  console.error(form.formState.errors);

  return (
    <View>
      <Controller
        control={form.control}
        name="email"
        render={field => (
          <TextInput
            testID="welcome-sign-in-input"
            placeholder="email"
            onChangeText={field.field.onChange}
            value={field.field.value}
            keyboardType="email-address"
          />
        )}
      />
      <Button title="submit" onPress={form.handleSubmit(() => {})} />
    </View>
  );
};
