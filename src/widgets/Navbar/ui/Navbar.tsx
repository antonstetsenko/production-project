import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string,
}

export const Navbar = ({className}: NavbarProps) => {

  return (
    <div className={classNames(cls.Navbar)}>
      <div className={cls.links}>
        <AppLink 
          theme={AppLinkTheme.SECONDARTY} 
          to={'/'} 
          className={cls.mainLink}>
            Главная
        </AppLink>
        <AppLink 
          theme={AppLinkTheme.SECONDARTY} 
          to={'/about'}>
            О сайте
        </AppLink>
      </div>
    </div>
  );
}
