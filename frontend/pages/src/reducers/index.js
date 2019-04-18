import { combineReducers } from 'redux';

const jobs = (
  jobs_data = {
    source: '',
    job_list: '',
    total_page: '',
    current_page: 1
  },
  action = ''
) => {
  if (action.type === 'FETCH_JOBDATA') {
    return action.payload;
  }
  if (action.type === 'CHANGE_PAGE') {
    return action.payload;
  }

  return jobs_data;
};

// const logo_click = (init = '', action = '') => {
//   return e => {
//     if (e.target.className.indexOf('current_logo') != -1 && e.target.className.indexOf('not_current_logo') == -1) {
//       let not_current_logo = document.querySelectorAll('.not_current_logo');
//       not_current_logo.forEach(e => {
//         e.classList.toggle('down_to_buttom');
//       });
//     } else if (e.target.className.indexOf('yourator') != -1) {
//       console.log('yourator', e.target.className);
//     } else if (e.target.className.indexOf('104') != -1) {
//       console.log('104', e.target.className);
//     } else if (e.target.className.indexOf('meetjobs') != -1) {
//       console.log('meetjobs', e.target.className);
//     } else {
//       let not_current_logo = document.querySelectorAll('.not_current_logo');
//       not_current_logo.forEach(e => {
//         if (e.className.indexOf('down_to_buttom') == -1) {
//           e.classList.toggle('down_to_buttom');
//         }
//       });
//     }
//   };
// };

export default combineReducers({
  jobs: jobs
  // logo_click: logo_click
});
