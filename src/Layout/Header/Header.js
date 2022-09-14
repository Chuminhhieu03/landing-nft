import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import config from '~/configs';
import images from '~/assest/images';
import Button from '~/component/Button';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Qeeb" />
                </Link>
                <div className={cx('page-nav')}>
                    <Link to={config.routes.home} className={cx('page-navinner')}>
                        Home
                    </Link>
                    <Link to={config.routes.collection} className={cx('page-navinner')}>
                        Collection
                    </Link>
                    <Link to={config.routes.blog} className={cx('page-navinner')}>
                        Blog
                    </Link>
                </div>
                <Button primary large>
                    Connect Wallet
                </Button>
            </div>
        </header>
    );
}

export default Header;
