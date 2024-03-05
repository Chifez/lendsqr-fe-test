import TextInput from '@/components/shared/textInput';
import Image from 'next/image';
import Styles from './index.module.scss';
import localFont from 'next/font/local';
import Button from '@/components/shared/Button';
import Link from 'next/link';

const Avenir = localFont({
  src: [
    {
      path: '../../../fonts/AvenirNextLTPro-Bold.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../../../fonts/AvenirNextLTPro-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
});
const LoginPage = () => {
  return (
    <section className={Styles.container}>
      <header>
        <nav>
          <Image
            src="/brand-logo.svg"
            alt="logo banner"
            width={120}
            height={30}
          />
        </nav>
      </header>

      <main className={Styles.main_container}>
        <div className={Styles.banner}>
          <Image
            src="/login-image.svg"
            alt="login banner"
            width={500}
            height={500}
          />
        </div>

        <div className={Styles.login_form}>
          <div className={`${Avenir.className} ${Styles.login_form_greeting}`}>
            <h1>Welcome!</h1>
            <p>Enter details to login</p>
          </div>
          <form className={`${Avenir.className}`}>
            <TextInput placeholder="Email" name="email" value={''} />
            <TextInput
              placeholder="Password"
              name="password"
              value={''}
              type="password"
            />
            <Link href="/#">FORGOT PASSWORD?</Link>
            <Button>LOG IN</Button>
          </form>
        </div>
      </main>
    </section>
  );
};

export default LoginPage;
