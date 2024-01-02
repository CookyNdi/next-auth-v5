import { CardWrapper } from './card-wrapper';

export const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel='Wellcome Back'
      backButtonLabel="Don't have an account?"
      backButtonHref='/auth/register'
      showSocial
    >
      LoginForm
    </CardWrapper>
  );
};
