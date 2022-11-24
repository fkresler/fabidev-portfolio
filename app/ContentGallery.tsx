import styles from './ContentGallery.module.scss';

type ContentGalleryProps = {
  contents: React.ReactNode[];
};

const ContentGallery = ({ contents }: ContentGalleryProps) => {
  return (
    <ul className={styles.gallery}>
      {contents.map((block, index) => (
        <li key={index} className={styles.element}>
          {block}
        </li>
      ))}
    </ul>
  );
};

export default ContentGallery;
