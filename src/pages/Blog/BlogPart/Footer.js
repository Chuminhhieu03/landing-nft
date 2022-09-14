import classNames from 'classnames/bind';

import styles from './Footer.module.scss';
import images from '~/assest/images';
import { quicklink, marketplace } from './const';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('up-footer')}>
                    <div className={cx('logo-footer')}>
                        <img src={images.logo} alt="logo"></img>
                    </div>
                    <div className={cx('quick-link')}>
                        <span className={cx('title-link')}>Quick Link</span>
                        <ul>
                            {quicklink.map((item, index) => {
                                return (
                                    <li key={index} className={cx('item-link')}>
                                        {item}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className={cx('market-place')}>
                        <span className={cx('title-link')}>Market Place</span>
                        <ul>
                            {marketplace.map((item, index) => {
                                return (
                                    <li key={index} className={cx('item-link')}>
                                        {item}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className={cx('email-info')}>
                        <span className={cx('note-email')}>Sign Up to Receive Updates Services</span>
                        <form className={cx('get-email')}>
                            <input type="text" placeholder="youremail@gmail.com" className={cx('input-email')}></input>
                            <button type="submit" className={cx('submit-email')}>
                                <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
                            </button>
                        </form>
                    </div>
                </div>
                <div className={cx('down-footer')}>
                    <span>Qeeb 2022. All Rights Reserved</span>
                    <span>Terms Conditions Privacy</span>
                    <div>
                        <img src={images.iconfooter} alt="iconfooter"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
