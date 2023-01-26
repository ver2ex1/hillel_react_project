import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import './styles.css';

const users = [
  {
    name: 'Eliana Ratliff',
    phone: '(848) 677-8899',
    email: 'molestie.orci@icloud.edu',
    address: 'Ap #491-978 Ultricies Ave',
  },
  {
    name: 'Chancellor Goodwin',
    phone: '(131) 375-3360',
    email: 'phasellus.dolor.elit@icloud.edu',
    address: '358-4033 Vestibulum Rd.',
  },
  {
    name: 'Cade Hart',
    phone: '(364) 822-3138',
    email: 'dui.lectus@yahoo.org',
    address: '5565 Libero Av.',
  },
  {
    name: 'Drake Ballard',
    phone: '(413) 514-2332',
    email: 'sed.neque@aol.com',
    address: '9713 In St.',
  },
  {
    name: 'Porter Turner',
    phone: '1-243-843-2448',
    email: 'lorem@google.org',
    address: 'Ap #930-263 Tincidunt St.',
  },
  {
    name: 'Peter Aguirre',
    phone: '(567) 457-1401',
    email: 'faucibus.id@google.com',
    address: 'Ap #301-7239 Diam St.',
  },
  {
    name: 'Nathaniel Salinas',
    phone: '1-569-973-4031',
    email: 'orci.sem@icloud.net',
    address: 'Ap #452-8053 Lacus. Av.',
  },
  {
    name: 'Gray Hendrix',
    phone: '1-708-916-1673',
    email: 'et.arcu.imperdiet@protonmail.couk',
    address: '489-2851 Suspendisse Rd.',
  },
  {
    name: 'Maia Dennis',
    phone: '1-853-314-3895',
    email: 'cum.sociis@icloud.couk',
    address: '944-3096 Duis Street',
  },
  {
    name: 'Hedley Russell',
    phone: '(428) 152-1785',
    email: 'nulla@hotmail.edu',
    address: 'Ap #824-7000 Iaculis Street',
  },
  {
    name: 'Austin Reed',
    phone: '1-887-657-1344',
    email: 'sed.tortor.integer@aol.couk',
    address: 'Ap #157-9182 Curabitur Street',
  },
  {
    name: 'Sean Kirkland',
    phone: '1-987-381-4501',
    email: 'malesuada.fames.ac@protonmail.edu',
    address: '479-7323 Nec Ave',
  },
  {
    name: 'Owen Bryant',
    phone: '1-771-620-1222',
    email: 'vehicula.aliquet@aol.com',
    address: 'Ap #549-986 Morbi Av.',
  },
  {
    name: 'Quyn Ballard',
    phone: '(255) 748-4313',
    email: 'lectus.convallis@aol.ca',
    address: 'Ap #952-3370 Sapien. St.',
  },
  {
    name: 'Garrison Rasmussen',
    phone: '(363) 483-4251',
    email: 'eu.eleifend.nec@hotmail.ca',
    address: 'Ap #779-376 Et Rd.',
  },
];

const HomePage = () => {
  const [count, setCount] = useState(0);
  const plus = () => setCount(count + 1);
  const minus = () => setCount(count - 1);
  const [lessThanZero, setLessThanZero] = useState(false);
  useEffect(() => {
    if (count < 0) {
      setLessThanZero(true);
    }
  }, [count]);
  return lessThanZero ? (
    <span>TAK NIZYA</span>
  ) : (
    <div className='wrapper'>
      <span>{count}</span>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
};

export default HomePage;
