import clsx from 'clsx';
import classes from './tag.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../../modules/Home/provider/ThemeProvider';


export function Badge() {
  const provider = useContext(ThemeContext)

  return <div className={clsx(classes.tag, {
    [classes['darkmode']]: provider.darkMode === true,
    [classes['lightmode']]: provider.darkMode === false,
  })}>Badge</div>
}
