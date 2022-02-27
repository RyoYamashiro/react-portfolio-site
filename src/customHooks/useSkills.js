import {useEffect, useReducer} from 'react';
import axios from 'axios';

import {skillReducer, initialState, actionTypes} from '../reducers/skillReducer';
export const useSkills = () => {
  const [state, dispatch] = useReducer(skillReducer, initialState);

  useEffect(() => {
    dispatch({type: actionTypes.fetch});
    axios.get('https://api.github.com/users/RyoSuzuki/repos')
      .then((response) => {
        console.log(response);

        const languageList = response.data.map(res => res.language);
        console.log(languageList);

        const countedLanguageList = genarateLanguageCountObj(languageList);
        dispatch({type: actionTypes.success, payload: {languageList: countedLanguageList}});
      })
      .catch(() => {
        dispatch({type: actionTypes.error});
      });
  }, []);

  const genarateLanguageCountObj = (allLanguageList) => {
    const notNullLanguageList = allLanguageList.filter(language => language != null);
    const uniqueLanguageList = [...new Set(notNullLanguageList)];

    return uniqueLanguageList.map(item => {
      return {
        language: item,
        count: allLanguageList.filter(language => language === item).length
      }
    });
  };


  const converseCountToPercentage = (count) => {
    if(count > 10){return 100;}
    return count * 10;
  };

  const sortedLanguageList = () => (
    state.languageList.sort((firstLang, nextLang) => nextLang.count - firstLang.count)
  );

  return [sortedLanguageList, state.requestState, converseCountToPercentage];
}
