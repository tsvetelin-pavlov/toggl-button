/*jslint indent: 2 */
/*global $: false, document: false, togglbutton: false, createTag:false*/

'use strict';

togglbutton.render('.taskItem-body:not(.toggl)', { observe: true }, function(elem) {
  var
      link,
      container = createTag('a', 'taskItem-toggl'),

      titleElem = $('.taskItem-title', elem),
      projectTitleElem = $('.taskItemInfo-title', elem),
      
      activeList = $('ul.lists .listItem.active'),
      activeListTitle = $('.listItem-title', activeList);

  var projectTitle = '';
  projectTitle = projectTitleElem ? projectTitleElem.textContent : activeListTitle ? activeListTitle.textContent : '';

  link = togglbutton.createTimerLink({
      className: 'microsofttodo',
      buttonType: 'minimal',
      description: titleElem.textContent,
      projectName: projectTitle
  });

  container.appendChild(link);
  elem.appendChild(container);
});
