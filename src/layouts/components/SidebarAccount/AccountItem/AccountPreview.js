import classNames from 'classnames/bind';
import { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from '~/Components/Button';
import styles from './AccountPreview.module.scss';
import Image from '~/Components/Image';
import * as userService from '~/service/userService';

const cx = classNames.bind(styles);

function AccountPreview({ data }) {
    const [followed, setFollowed] = useState(data.is_followed);
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
                <Button className={cx('follow-btn')} primary>
                    {followed ? 'Following' : 'Follow'}
                </Button>
            </header>
            <div className={cx('body')}>
                <Link to={`/@${data.nickname}`}>
                    <p className={cx('nickname')}>
                        <strong>{data.nickname}</strong>
                        {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                    </p>
                    <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
                </Link>
            </div>
            <p className={cx('analytics')}>
                <strong className={cx('value')}>{data.followers_count} </strong>
                <span className={cx('label')}>Followers</span>
                <strong className={cx('value')}>{data.likes_count} </strong>
                <span className={cx('label')}>Likes</span>
            </p>
        </div>
    );
}

AccountPreview.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountPreview;
