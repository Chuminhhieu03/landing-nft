import classNames from 'classnames/bind';
import { useState } from 'react';

import Button from '~/component/Button';
import styles from './Product.module.scss';
import { collection30day, collection7day } from './const';

const cx = classNames.bind(styles);
const arrSum = [...collection7day, ...collection30day];

function Product() {
    const [btnState, setBtnState] = useState(true);
    const [seeAll, setSeeAll] = useState(false);

    const handleClick = () => {
        setBtnState(!btnState);
    };
    const handleCollection = (arr) => {
        return arr.map((item, index) => {
            return (
                <div className={cx('group-collection')} key={index}>
                    <div className={cx('avatar-display')}>
                        <img src={item.avatar} alt={item.name}></img>
                        <div className={cx('index-avatar')}>{item.index}</div>
                    </div>
                    <div className={cx('info-display')}>
                        <div className={cx('name-display')}>
                            <span className={cx('name')}>{item.name}</span>
                            <span className={cx('floor')}>Floor: {item.floor}</span>
                        </div>
                        <div className={cx('price-display')}>
                            <span className={cx('eth')}>{item.eth}</span>
                            <span className={cx('price')}>{item.price}</span>
                            <span className={cx('percent')}>{item.percent}</span>
                        </div>
                    </div>
                </div>
            );
        });
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('title-main')}>
                    <h1 className={cx('title')}>Top Collection</h1>
                    {!seeAll && (
                        <div className={cx('btn-state')}>
                            <div className={cx('btn-7day', { active: btnState })} onClick={handleClick}>
                                <span>7 Days</span>
                            </div>
                            <div className={cx('btn-30day', { active: !btnState })} onClick={handleClick}>
                                <span>30 Days</span>
                            </div>
                        </div>
                    )}
                </div>
                <div className={cx('collection')}>
                    {!seeAll
                        ? btnState
                            ? handleCollection(collection7day)
                            : handleCollection(collection30day)
                        : handleCollection(arrSum)}
                </div>
                <Button
                    primary
                    large
                    className={cx('btn-all')}
                    onClick={() => {
                        setSeeAll(!seeAll);
                    }}
                >
                    See All Collection
                </Button>
            </div>
        </div>
    );
}

export default Product;
