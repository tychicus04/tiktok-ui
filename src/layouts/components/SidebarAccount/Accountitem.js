import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './SidebarAccount.module.scss';
import { Wrapper as PopperWrapper } from '~/Components/Popper';
import AccountPreview from './AccountItem/AccountPreview';
import Image from '~/Components/Image';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    const renderPreview = (props) => {
        return (
            <div tab-index="-1" {...props}>
                <PopperWrapper>
                    <div className={cx('preview')}>
                        <AccountPreview data={data} />
                    </div>
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy
                interactive
                delay={[800, 200]}
                offset={[-20, 0]}
                render={renderPreview}
                placement="bottom-start"
                touch={false}
            >
                <Link to={`/@${data.nickname}`}>
                    <div className={cx('account-item')}>
                        <Image className={cx('avatar')} src={data.avatar} alt={data.nickname} />
                        <div className={cx('item-info')}>
                            <p className={cx('nickname')}>
                                <strong>{data.nickname}</strong>
                                {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                            </p>
                            <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
                        </div>
                    </div>
                </Link>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
