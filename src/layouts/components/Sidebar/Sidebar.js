import { useEffect, useState, useContext, lazy, Suspense } from 'react';
import classNames from 'classnames/bind';

import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';
import {
    HomeIcon,
    UserGroupIcon,
    LiveIcon,
    HomeActiveIcon,
    UserGroupActiveIcon,
    LiveActiveIcon,
} from '~/Components/Icon';
import config from '~/config';
import * as userService from '~/service/userService';
const SidebarAccount = lazy(() => import('~/layouts/components/SidebarAccount'));

const cx = classNames.bind(styles);

const INIT_PAGE = 1;
const PER_PAGE = 5;

function Sidebar() {
    const [suggestedUsers, setSuggestedUsers] = useState([]);
    const [suggestedPerPage, setSuggestedPerPage] = useState(PER_PAGE);
    const [followingUsers, setFollowingUsers] = useState([]);
    const [followingPerPage, setFollowingPerPage] = useState(PER_PAGE);

    useEffect(() => {
        userService
            .getSuggested({ page: INIT_PAGE, perPage: suggestedPerPage })
            .then((data) => {
                if (Array.isArray(data)) {
                    setSuggestedUsers(data);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, [suggestedPerPage]);

    useEffect(() => {
        userService
            .getFollowing({ page: followingPerPage })
            .then((data) => {
                if (Array.isArray(data)) {
                    if (followingPerPage === INIT_PAGE) {
                        setFollowingUsers(data);
                    } else {
                        setFollowingUsers((prevUsers) => [...prevUsers, ...data]);
                    }
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, [followingPerPage]);

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For you" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
            <Suspense>
                <SidebarAccount label="Suggested Account" data={suggestedUsers} />
                <SidebarAccount label="Following Account" data={followingUsers} />
            </Suspense>
        </aside>
    );
}

export default Sidebar;
