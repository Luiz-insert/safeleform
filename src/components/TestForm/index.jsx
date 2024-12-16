import { useState, Fragment, useEffect } from 'react';    

function TestForm({ onCompletion }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [mail, setEmail] = useState('');

  useEffect(() => {
    const isFilled = name !== '' && phone !== '' && mail !== '';
    if (isFilled) {
      onCompletion(isFilled, name, phone, mail);
    }
  }, [name, phone, mail]);

  return (
    <Fragment>
      <div className="flex flex-col gap-2" style={{ fontFamily: 'Quicksand' }}>
        <form className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Nome"
            className="border-2 border-zinc-300 rounded-full px-6 py-2 bg-zinc-50 text-center"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Telefone"
            className="border-2 border-zinc-300 rounded-full px-6 py-2 bg-zinc-50 text-center"
            value={phone}
            required
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            placeholder="Cidade"
            className="border-2 border-zinc-300 rounded-full px-6 py-2 bg-zinc-50 text-center"
            value={mail}
            onChange={(e) => setEmail(e.target.value)}
          />
        </form>
      </div>
    </Fragment>
  );
}

export default TestForm;
