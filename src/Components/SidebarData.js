import React, {useEffect} from 'react';

import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';





  

export const SidebarData = [
  {

    title: 'Admin',
   
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'AccountCharge',
        // path: '/form',
        icon: <IoIcons.IoIosPaper />,

        subNav: [
          {
            title: 'avc',
            path: '/form',
            icon: <IoIcons.IoIosPaper />
          }
        ],
        subNav: [
          {
            title: 'avc',
            path: '/form',
            icon: <IoIcons.IoIosPaper />
          }
        ],
      },
      {
        title: 'BillCategory',
        path: '/form',
        icon: <IoIcons.IoIosPaper />
      },
      {
            title: 'BillType',
            path: '/form',
            icon: <IoIcons.IoIosPaper />
      },
      {
            title: 'Department',
            path: '/form',
            icon: <IoIcons.IoIosPaper />
      },
      {
            title: 'FinancialYear',
            path: '/form',
            icon: <IoIcons.IoIosPaper />
      },
      {
            title: 'FundingSource',
            path: '/form',
            icon: <IoIcons.IoIosPaper />
      },
      {
            title: 'LedgerType',
            path: '/form',
            icon: <IoIcons.IoIosPaper />
      },
      {
            title: 'paymentType',
            path: '/form',
            icon: <IoIcons.IoIosPaper />
      },
    ]
  },
  {
    title: '2',
   
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'A',
        path: '/form',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'B',
        path: '/form',
        icon: <IoIcons.IoIosPaper />
      },
      {
            title: 'C',
            path: '/form',
            icon: <IoIcons.IoIosPaper />
          }
    ]
  },
  {
    title: '3',
   
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'A',
        path: '/form',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'B',
        path: '/form',
        icon: <IoIcons.IoIosPaper />
      },
      {
            title: 'C',
            path: '/form',
            icon: <IoIcons.IoIosPaper />
          }
    ]
  }
 
 
];