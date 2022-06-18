import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Authors } from 'src/components/comon-types';
import { ProfileState } from 'src/store/profile/reducer';
import { changeName, toggleProfile } from 'store/profile/actions';
export const Profile: FC = () => {
  const [value, setValue] = useState<string>(Authors.USER);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const visible = useSelector((state: ProfileState) => state.visible);
  const name = useSelector((state: ProfileState) => state.name);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Profile</h1>
      <input type="checkbox" checked={visible} readOnly />
      <button onClick={() => dispatch(toggleProfile())}>Change Visible</button>
      <p>Приветствуем, {name}</p>
      <input type="text" value={value} onChange={handleChange} />
      <button onClick={() => dispatch(changeName(value))}>Change Name</button>
    </>
  );
};
