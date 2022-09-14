import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

import styles from './Catory.module.scss';
import images from '~/assest/images';
import Button from '~/component/Button';

const cx = classNames.bind(styles);

const category = [
    {
        src: images.gamehome,
        title: 'Games',
    },
    {
        src: images.sporthome,
        title: 'Sports',
    },
    {
        src: images.metarverhome,
        title: 'Metarvers',
    },
    {
        src: images.arthome,
        title: 'Art',
    },
    {
        src: images.musichome,
        title: 'Music',
    },
    {
        src: images.photographyhome,
        title: 'Photography',
    },
];

function Catory() {
    return (
        <div className={cx('popular-catory')}>
            <h1 className={cx('main-title')}>Popular Category</h1>
            <div className={cx('main-group')}>
                <Button circle className={cx('btn-nextright')}>
                    <FontAwesomeIcon icon={faArrowLeftLong}></FontAwesomeIcon>
                </Button>

                {category.map((item, index) => {
                    return (
                        <div className={cx('group-catory')} key={index}>
                            <div className={cx('img-catory')}>
                                <img src={item.src} alt={item.title}></img>
                            </div>
                            <span className={cx('title-catory')}>{item.title}</span>
                        </div>
                    );
                })}

                <Button circle className={cx('btn-nextleft')}>
                    <FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon>
                </Button>
            </div>
        </div>
    );
}

export default Catory;
