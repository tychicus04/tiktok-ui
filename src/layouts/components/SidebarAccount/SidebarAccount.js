import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import AccountItem from './Accountitem';
import styles from './SidebarAccount.module.scss';

const cx = classNames.bind(styles);

function SidebarAccount({ label, data = [] }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {data.map((account) => (
                <AccountItem key={account.id} data={account} />
            ))}
            <p className={cx('more-btn')}>See all</p>
        </div>
    );
}

SidebarAccount.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.array,
};

export default SidebarAccount;
