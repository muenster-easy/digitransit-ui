import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { intlShape } from 'react-intl';
import Icon from './Icon';

const LayerCategoryGroup = ({ title, icon, children }, { intl }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="layer-category-dropdown-container">
      <div className="layer-category-dropdown-header">
        <div className="layer-category-dropdown-header-content">
          <Icon
            className="layer-category-dropdown-header-icon"
            img={icon}
            viewBox="0 0 15 11"
            width={1.875}
            height={1.25}
          />
          {title}
        </div>
        <button
          className="layer-category-dropdown-button"
          type="button"
          onClick={() => setOpen(prev => !prev)}
        >
          <span className="sr-only">
            {intl.formatMessage({
              id: open ? 'layer-dropdown-close-label' : 'layer-dropdown-open-label',
            })}
          </span>
          <Icon className={open ? 'inverted' : undefined} color="#707070" img="icon-icon_arrow-dropdown" />
        </button>
      </div>
      {open && <div className="layer-category-dropdown-content">{children}</div>}
    </div>
  );
};

LayerCategoryGroup.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  children: PropTypes.node,
};

LayerCategoryGroup.contextTypes = {
  intl: intlShape.isRequired,
};

export default LayerCategoryGroup;


