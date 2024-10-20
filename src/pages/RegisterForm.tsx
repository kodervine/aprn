import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useAppDispatch, useAppSelector } from '@/hooks/useReduxHook';
import { setUserID } from '@/redux/auth/authSlice';
import TextInput from '@/components/forms/TextInput';
import Button from '@/components/Button';
import { PASSWORD_REGEX } from '@/services/data';
import { getErrorMessage } from '@/services/utils';
import { useAddNewUserMutation } from '@/services/api/auth';

const reportError = ({ message }: { message: string }) => {
  console.error(message);
};

// * to ensure no empty string, use min(1)
const validationSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .regex(
      PASSWORD_REGEX,
      'Password should be 6 - 20 characters long with a number, 1 lowercase and 1 uppercase letter'
    ),
});

// * Handle confirm password - https://stackoverflow.com/questions/73695535/how-to-check-confirm-password-with-zod
const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const [addNewPost] = useAddNewUserMutation();
  const userID = useAppSelector((state) => state.auth.userID);
  console.log(userID);

  const handleRegister = async (formData: {
    email: string;
    password: string;
  }) => {
    console.log(formData);
    toast.loading('Registering user, please hold on...');
    try {
      // const data = {
      //   email: formData.email,
      //   password: formData.password,
      //   permission: 1100,
      // };
      const user = await addNewPost({
        username: 'kminchelle',
        password: '0lelplR',
      }).unwrap();
      toast.success('User added succesfully');
      dispatch(setUserID(user.id));
    } catch (error) {
      reportError({ message: getErrorMessage(error) });
      toast.error('Something went wrong with your rquest');
    }
    return toast.dismiss();
  };

  return (
    <section>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            name="userEmail"
            type="email"
            placeholder="Your email here"
            icon="fi-rr-user"
            value={value}
            onChange={onChange}
          />
        )}
        name="email"
      />
      {errors.email && <p className="text-red-400">{errors.email.message}</p>}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            name="userPassword"
            type="password"
            placeholder="Your password here"
            icon="fi-rr-user"
            value={value}
            onChange={onChange}
          />
        )}
        name="password"
      />
      {errors.password && (
        <p className="text-red-400">{errors.password.message}</p>
      )}
      <Button
        onClick={handleSubmit(handleRegister)}
        type="submit"
        text="Submit"
      />
    </section>
  );
};

export default RegisterForm;
