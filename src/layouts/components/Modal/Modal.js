import classNames from 'classnames/bind';
import styles from './Modal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faXmark } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Modal() {
    return (
        <div className={cx('modal')}>
            <div className={cx('modal-overlay')}></div>
            <div className={cx('modal_body')}>
                <FontAwesomeIcon icon={faChevronLeft} />
                <FontAwesomeIcon icon={faXmark} />
                <div className={cx('modal-container')}>
                    <form>
                        <h2 className={cx('modal-title')}>Đăng ký</h2>
                        <div className={cx('modal-label')}>Ngày sinh của bạn là ngày nào?</div>
                        <div className={cx('modal-age-selector')}>
                            <div className={cx('modal-selector-label')}></div>
                            <div className={cx('modal-selector-label')}></div>
                            <div className={cx('modal-selector-label')}></div>
                        </div>
                        <div className={cx('modal-notice')}>Ngày sinh của bạn sẽ không được hiện thị công khai</div>
                        <div className={cx('modal-description')}>
                            Điện thoại
                            <a className={cx('modal-link')}></a>
                        </div>
                        <div className={cx('phone-input-container')}>
                            <div className={cx('area-selector')}></div>
                            <input className={cx('phone-input')}></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Modal;
