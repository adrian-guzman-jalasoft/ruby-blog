import ReactOnRails from 'react-on-rails';

import HelloWorld from '../bundles/HelloWorld/components/HelloWorld';
import PostPage from '../bundles/HelloWorld/components/PostPage';
import PostCard from '../bundles/HelloWorld/components/PostCard';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorld,
  PostPage,
  PostCard
});
