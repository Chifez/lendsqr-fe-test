import TextInput from '@/components/shared/textInput';
import Image from 'next/image';

const LoginPage = () => {
  return (
    <section>
      <header>
        <nav>
          <Image
            src="/brand-logo.svg"
            alt="logo banner"
            width={25}
            height={25}
          />
          Lendsqr
        </nav>
      </header>

      <main>
        <div>
          <Image
            src="/login-image.svg"
            alt="login banner"
            width={500}
            height={500}
          />
        </div>

        <div>
          <TextInput placeholder="Email" name="email" value={''} />
          <TextInput
            placeholder="Password"
            name="password"
            value={''}
            type="password"
          />
        </div>
      </main>
    </section>
  );
};

export default LoginPage;
