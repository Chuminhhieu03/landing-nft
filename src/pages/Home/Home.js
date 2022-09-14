import classNames from 'classnames/bind';

import images from '~/assest/images';
import Button from '~/component/Button';
import styles from './Home.module.scss';
import Catory from './HomePart/Catory';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('hero-section')}>
                    <div className={cx('heading')}>
                        <div className={cx('heading-text')}>
                            <h1 className={cx('heading-title')}>NFT Marketplace</h1>
                            <h1 className={cx('heading-concept')}>Collect rare digital artworks</h1>
                        </div>
                        <div className={cx('creator')}>
                            <Button primary small className={cx('btn-explore')}>
                                Explore
                            </Button>
                            <div className={cx('images-creators')}>
                                <img src={images.creators} alt="Creator"></img>
                            </div>
                            <div className={cx('images-arrow')}>
                                <img src={images.arrowhome} alt="Arrow"></img>
                            </div>
                        </div>
                        <div className={cx('funfact')}>
                            <div className={cx('group-funfact')}>
                                <h2 className={cx('amount')}>50K</h2>
                                <h4 className={cx('title-amount')}>Artwork</h4>
                            </div>
                            <div className={cx('group-funfact')}>
                                <h2 className={cx('amount')}>35K</h2>
                                <h4 className={cx('title-amount')}>Auction</h4>
                            </div>

                            <div className={cx('group-funfact')}>
                                <h2 className={cx('amount')}>23k</h2>
                                <h4 className={cx('title-amount')}>Artist</h4>
                            </div>
                        </div>
                    </div>
                    <div className={cx('logo-home')}>
                        <img src={images.playicon} alt="PlayIcon"></img>
                    </div>
                    <div className={cx('hero-img')}>
                        <img src={images.heroimg} alt="hero-img"></img>
                    </div>
                </div>
                <Catory />
            </div>
        </div>
    );
}

export default Home;
