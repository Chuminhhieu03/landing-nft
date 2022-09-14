import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

import styles from './Tranding.module.scss';
import { tranding } from './const';
import Button from '~/component/Button';
const cx = classNames.bind(styles);

function Tranding() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('main-title')}>
                    <span className={cx('title')}>Tranding NFTS</span>
                </div>
                <div className={cx('tranding-group')}>
                    <Button circle className={cx('btn-nextright')}>
                        <FontAwesomeIcon icon={faArrowLeftLong}></FontAwesomeIcon>
                    </Button>
                    {tranding.map((item, index) => {
                        return (
                            <div className={cx('tranding-item')} key={index}>
                                <div className={cx('avatar')}>
                                    <img src={item.avatar} alt={item.name}></img>
                                </div>
                                <div className={cx('name-price')}>
                                    <div className={cx('name-display')}>
                                        <span className={cx('name')}>{item.name}</span>
                                        <span className={cx('top')}>{item.top}</span>
                                    </div>
                                    <div className={cx('price-display')}>
                                        <div className={cx('price')}>
                                            <span className={cx('price-title')}>Price</span>
                                            <span className={cx('price-cost')}>{item.price}</span>
                                        </div>
                                        <div className={cx('bid')}>
                                            <span className={cx('bid-title')}>Highest</span>
                                            <span className={cx('bid-cost')}>{item.bid}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    <Button circle className={cx('btn-nextleft')}>
                        <FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Tranding;
