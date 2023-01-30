export function generateUserResponse(errorCode: string, form) {
  switch (errorCode) {
    case 'auth/wrong-password':
      return { email: form.email, password: '', message: 'Senha inválida!' }
    case 'auth/user-not-found':
      return {
        email: form.email,
        password: form.password,
        message: 'Esse E-mail não está cadastrado!',
      }
    case 'auth/internal-error':
      return {
        email: form.email,
        password: form.password,
        message: 'Houve um erro interno. Tente novamente mais tarde.',
      }
    case 'auth/too-many-requests':
      return {
        email: form.email,
        password: form.password,
        message:
          'Você tentou entrar nessa conta mais de 100 vezes em uma hora. Tente novamente mais tarde.',
      }
    case 'auth/email-already-in-use':
      return {
        email: form.email,
        password: '',
        message: 'Uma conta já foi registrada com esse E-mail!',
      }
    case 'auth/weak-password':
      return {
        email: form.email,
        password: '',
        message: 'Sua senha deve ter, no mínimo, 6 caracteres.',
      }
    case 'auth/invalid-email':
      return {
        email: form.email,
        password: form.password,
        message: 'Esse E-mail é invalido!',
      }
  }
}
