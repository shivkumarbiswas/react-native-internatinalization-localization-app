import React from 'react';
import { AppRegistry,
    StyleSheet,
    Text,
    View,
 } from 'react-native';
import I18n from 'react-native-i18n';
import RNRestart from 'react-native-restart';
import RNReactNativeLocale from 'react-native-locale-listener';

//References: https://github.com/AlexanderZaytsev/react-native-i18n
//References: https://dzone.com/articles/internationalization-and-localization-in-your-reac
//References: https://medium.com/@maximtoyberman/changing-locale-in-react-native-android-86fe25cde318


class Localization extends React.Component {

    changeLayout (language) {
        RNRestart.Restart()
    }

    componentDidMount () {
        RNReactNativeLocale.addLocaleListener(this.changeLayout)
    }

    componentWillUnmount () {
        RNReactNativeLocale.removeLocaleListener(this.changeLayout)
    }

    render() {
      return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {I18n.t("greeting")}
            </Text>
            <Text style={styles.text}>
                {I18n.t("goodbye")}
            </Text>
        </View>
      );
    }
  }

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

I18n.fallbacks = true;
// I18n.defaultLocale = 'en';
// I18n.locale = 'en';

I18n.translations = {
    en: {
        greeting: "Hello",
        goodbye: "Bye"
    },
    fr: {
        greeting: "Bonjour",
        goodbye: "Au Revoir"
    },
    es: {
        greeting: "Hola",
        goodbye: "Adios"
    }
}

AppRegistry.registerComponent('localizationApp', () => Localization);
