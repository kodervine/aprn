import { ChangeEvent, useState } from 'react';

/**
 * TextInput component allowing user input.
 * It can dynamically show or hide password text based on user interaction.
 *
 * @param name - Name of the input.
 * @param type - Type of the input.
 * @param id - Optional ID for the input.
 * @param value - Optional value for the input.
 * @param placeholder - Placeholder text for the input.
 * @param icon - Optional icon for the input.
 * @param onChange - Event handler for input changes.
 */

interface TextInputProps {
  name: string;
  type: 'text' | 'password' | 'number' | 'email';
  id?: string;
  value?: string | number;
  placeholder: string;
  icon?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({
  name,
  type,
  id,
  value,
  placeholder,
  icon,
  onChange,
}: TextInputProps) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <div className="relative w-[100%] mb-4">
      <input
        name={name}
        type={
          type === 'password' ? (passwordVisible ? 'text' : 'password') : type
        }
        placeholder={placeholder}
        defaultValue={value}
        id={id}
        className="input-box"
        onChange={onChange}
      />
      <i className={'fi ' + icon + ' input-icon'}></i>
      {type === 'password' ? (
        <i
          className={
            'fi fi-rr-eye ' +
            (!passwordVisible && '-crossed') +
            ' input-icon left-[auto] right-4 cursor-pointer'
          }
          onClick={() => setPasswordVisible((current) => !current)}
        ></i>
      ) : null}
    </div>
  );
};

export default TextInput;
