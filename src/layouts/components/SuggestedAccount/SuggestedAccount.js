import styles from './SuggestedAccount.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import AccountItem from './Accountitem';

const cx = classNames.bind(styles);

function SuggestedAccount({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />

            <p className={cx('more-btn')}>See all</p>
        </div>
    );
}

SuggestedAccount.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccount;
