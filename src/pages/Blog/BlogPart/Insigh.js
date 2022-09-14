import classNames from 'classnames/bind';

import styles from './Insight.module.scss';
import { insight } from './const';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Button from '~/component/Button';
import { faAndroid, faApple } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Insight() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('insight-section')}>
                    <div className={cx('main-title')}>
                        <span className={cx('title')}>Insights</span>
                    </div>
                    <div className={cx('insight-group')}>
                        {insight.map((item, index) => {
                            return (
                                <div className={cx('insight-item')} key={index}>
                                    <div className={cx('avatar-display')}>
                                        <img src={item.avatar} alt="name"></img>
                                    </div>
                                    <div className={cx('info-display')}>
                                        <div className={cx('topic')}>{item.topic}</div>
                                        <div className={cx('day')}>{item.day}</div>
                                    </div>
                                    <div className={cx('title-info')}>{item.title}</div>
                                    <div className={cx('infomation')}>
                                        <span className={cx('read')}>Read me</span>
                                        <FontAwesomeIcon icon={faArrowUp} className={cx('icon')}></FontAwesomeIcon>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className={cx('dowload-section')}>
                <div className={cx('inner-dowload')}>
                    <div className={cx('note-display')}>
                        <span>Download Qeeb app to track your NFT portfolio and discover more</span>
                    </div>
                    <div className={cx('download-btn')}>
                        <Button primary big className={cx('btn-d')}>
                            <FontAwesomeIcon icon={faAndroid} className={cx('icon-doawload')}></FontAwesomeIcon>
                            <span className={cx('namestore')}>Google Play</span>
                        </Button>
                        <Button primary big className={cx('btn-d')}>
                            <FontAwesomeIcon icon={faApple} className={cx('icon-doawload')}></FontAwesomeIcon>
                            <span className={cx('namestore')}>App Store</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Insight;
