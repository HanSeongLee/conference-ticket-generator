import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import TicketBgSvg from '@/assets/svgs/ticket-bg.svg';
import Icon, { IconName } from '@/components/element/Icon';
import Text from '@/components/typography/Text';
import { colors } from '@/types/colors';

export interface ITicketInfo {
    title: string;
    location: string;
    ticketNumber: string;
    avatar: string;
    fullName: string;
    githubUsername: string;
}

interface ITicketProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'>, ITicketInfo {

}

const Ticket: React.FC<ITicketProps> = ({
                                            title, location, fullName, githubUsername,
                                            avatar, ticketNumber, className, ...props
                                        }) => {
    return (
        <div className={cn(styles.ticket, className)}
             {...props}
        >
            <div className={styles.content}>
                <div className={styles.header}>
                    <Icon className={styles.icon}
                          iconName={IconName.SYMBOL}
                    />
                    <div className={styles.ticketInfo}>
                        <Text color={colors['color-neutral-000']}
                              preset={'text-preset-2'}
                        >
                            {title}
                        </Text>
                        <Text preset={'text-preset-6'}>
                            {location}
                        </Text>
                    </div>
                </div>
                <div className={styles.body}>
                    <img className={styles.avatar}
                         src={avatar}
                         alt={'Avatar'}
                    />
                    <div className={styles.userInfo}>
                        <Text color={colors['color-neutral-000']}
                              preset={'text-preset-3'}
                        >
                            {fullName}
                        </Text>
                        <div className={styles.github}>
                            <Icon className={styles.githubIcon}
                                  iconName={IconName.GITHUB}
                            />
                            <Text preset={'text-preset-6'}>
                                {githubUsername}
                            </Text>
                        </div>
                    </div>
                </div>
                <div className={styles.ticketNumber}>
                    <Text preset={'text-preset-3'}
                          color={colors['color-neutral-500']}
                    >
                        #{ticketNumber}
                    </Text>
                </div>
            </div>
            <TicketBgSvg />
        </div>
    );
};

export default Ticket;
