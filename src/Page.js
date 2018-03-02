import { Dimensions, Text, View } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

const Page = ({ isLight, image, title, subtitle, width, height, ...props }) => {
  let titleElement = title;
  if (typeof title === 'string' || title instanceof String) {
    titleElement = (
      <View style={[styles.padding, (props.titleContainerStyles || {})]}>
        <Text style={[styles.title, isLight ? styles.titleLight : {}, (props.titleStyles || {})]}>
          {title}
        </Text>
      </View>
    );
  }

  let subtitleElement = subtitle;
  if (typeof subtitle === 'string' || subtitle instanceof String) {
    subtitleElement = (
      <View style={[styles.padding, (props.subtitleContainerStyles || {})]}>
        <Text style={[styles.subtitle, isLight ? styles.subtitleLight : {}, (props.subtitleStyles || {})]}>
          {subtitle}
        </Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { width, height }]}>
      <View style={[styles.image, (props.imageContainerStyles || {})]}>{image}</View>
      {titleElement}
      {subtitleElement}
    </View>
  );
};

Page.propTypes = {
  isLight: PropTypes.bool.isRequired,
  image: PropTypes.element.isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

const { width, height } = Dimensions.get('window');
const potrait = height > width;

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: potrait ? 'center' : 'flex-start',
    paddingTop: potrait ? 0 : 10,
  },
  image: {
    flex: 0,
    paddingBottom: potrait ? 60 : 10,
    alignItems: 'center',
  },
  padding: {
    paddingHorizontal: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 26,
    color: '#fff',
    paddingBottom: 15,
  },
  titleLight: {
    color: '#000',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  subtitleLight: {
    color: 'rgba(0, 0, 0, 0.7)',
  },
};

export default Page;
