import clsx from 'clsx';
import classes from './tag.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../../modules/Home/provider/ThemeProvider';


export function Tag() {
  const provider = useContext(ThemeContext)

  return <div className={clsx(classes.tag, {
    [classes['darkmode']]: provider.darkmode === true,
    [classes['lightmode']]: provider.darkmode === false,
  })}>Tag</div>
}
