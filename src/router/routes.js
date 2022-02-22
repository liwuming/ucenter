import Welcome from '@/pages/welcome/index'
import BlogIndex from '@/pages/blog/index'
import BlockIndex from '@/pages/block/index'
import BlockContents from '@/pages/block/contents'
import NotFound from '@/pages/404.vue'
const routes = [{
        'path': '/',
        'component': Welcome
    },
    {
        'path': '/blog',
        'component': BlogIndex
    },
    {
        path: '/block',
        component: BlockIndex,
        children: [{
            path: '',
            component: NotFound
        }, {
            path: 'contents',
            component: BlockContents
        }]
    },
    {
        path: '/contents',
        component: BlockContents
    }
];

export default routes;