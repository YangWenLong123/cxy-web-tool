/*
 * @Author: along
 * @Description:
 * @Date: 2024-07-26 16:58:09
 * @LastEditors: along
 * @LastEditTime: 2024-07-26 17:52:28
 * @Fileurl:  /cxy-web-tool/src/views/syntax/config/jquery.js
 */
export const jquery = [
  {
    title: "Resource",
    children: [
      {
        title: "Online",
        children: [
          {
            title: "Official Website",
            url: "http://jquery.com/",
          },
        ],
      },
      {
        title: "Download",
        children: [
          {
            title: "jQuery 1.5 Visual Cheat Sheet [.pdf]",
            url: "http://127.0.0.1:8082/static/cs/jQuery-1.5-Visual-Cheat-Sheet.pdf",
          },
        ],
      },
    ],
  },
  {
    title: "Selectors",
    children: [
      {
        title: "Attribute",
        children: [
          {
            title: '[name|="value"]',
            url: "http://api.jquery.com/attribute-contains-prefix-selector/",
          },
          {
            title: '[name*="value"]',
            url: "http://api.jquery.com/attribute-contains-selector/",
          },
          {
            title: '[name~="value"]',
            url: "http://api.jquery.com/attribute-contains-word-selector/",
          },
          {
            title: '[name$="value"]',
            url: "http://api.jquery.com/attribute-ends-with-selector/",
          },
          {
            title: '[name="value"]',
            url: "http://api.jquery.com/attribute-equals-selector/",
          },
          {
            title: '[name!="value"]',
            url: "http://api.jquery.com/attribute-not-equal-selector/",
          },
          {
            title: '[name^="value"]',
            url: "http://api.jquery.com/attribute-starts-with-selector/",
          },
          {
            title: "[name]",
            url: "http://api.jquery.com/has-attribute-selector/",
          },
          {
            title: '[name="value"][name2="value2"]',
            url: "http://api.jquery.com/multiple-attribute-selector/",
          },
        ],
      },
      {
        title: "Forms",
        children: [
          {
            title: ":button",
            url: "http://api.jquery.com/button-selector/",
          },
          {
            title: ":checkbox",
            url: "http://api.jquery.com/checkbox-selector/",
          },
          {
            title: ":checked",
            url: "http://api.jquery.com/checked-selector/",
          },
          {
            title: ":disabled",
            url: "http://api.jquery.com/disabled-selector/",
          },
          {
            title: ":enabled",
            url: "http://api.jquery.com/enabled-selector/",
          },
          {
            title: ":focus",
            url: "http://api.jquery.com/focus-selector/",
          },
          {
            title: ":file",
            url: "http://api.jquery.com/file-selector/",
          },
          {
            title: ":image",
            url: "http://api.jquery.com/image-selector/",
          },
          {
            title: ":input",
            url: "http://api.jquery.com/input-selector/",
          },
          {
            title: ":password",
            url: "http://api.jquery.com/password-selector/",
          },
          {
            title: ":radio",
            url: "http://api.jquery.com/radio-selector/",
          },
          {
            title: ":reset",
            url: "http://api.jquery.com/reset-selector/",
          },
          {
            title: ":selected",
            url: "http://api.jquery.com/selected-selector/",
          },
          {
            title: ":submit",
            url: "http://api.jquery.com/submit-selector/",
          },
          {
            title: ":text",
            url: "http://api.jquery.com/text-selector/",
          },
        ],
      },
      {
        title: "Basics",
        children: [
          {
            title: "*",
            url: "http://api.jquery.com/all-selector/",
          },
          {
            title: ".class",
            url: "http://api.jquery.com/class-selector/",
          },
          {
            title: "element",
            url: "http://api.jquery.com/element-selector/",
          },
          {
            title: "#id",
            url: "http://api.jquery.com/id-selector/",
          },
          {
            title: "selector1, selectorN, ...",
            url: "http://api.jquery.com/multiple-selector/",
          },
        ],
      },
      {
        title: "Visibility Filters",
        children: [
          {
            title: ":hidden",
            url: "http://api.jquery.com/hidden-selector/",
          },
          {
            title: ":visible",
            url: "http://api.jquery.com/visible-selector/",
          },
        ],
      },
      {
        title: "Basic Filters",
        children: [
          {
            title: ":animated",
            url: "http://api.jquery.com/animated-selector/",
          },
          {
            title: ":eq()",
            url: "http://api.jquery.com/eq-selector/",
          },
          {
            title: ":even",
            url: "http://api.jquery.com/even-selector/",
          },
          {
            title: ":first",
            url: "http://api.jquery.com/first-selector/",
          },
          {
            title: ":gt()",
            url: "http://api.jquery.com/gt-selector/",
          },
          {
            title: ":header",
            url: "http://api.jquery.com/header-selector/",
          },
          {
            title: ":last",
            url: "http://api.jquery.com/last-selector/",
          },
          {
            title: ":lt()",
            url: "http://api.jquery.com/lt-selector/",
          },
          {
            title: ":not()",
            url: "http://api.jquery.com/not-selector/",
          },
          {
            title: ":odd",
            url: "http://api.jquery.com/odd-selector/",
          },
        ],
      },
      {
        title: "Child Filters",
        children: [
          {
            title: ":first-child",
            url: "http://api.jquery.com/first-child-selector/",
          },
          {
            title: ":last-child",
            url: "http://api.jquery.com/last-child-selector/",
          },
          {
            title: ":nth-child()",
            url: "http://api.jquery.com/nth-child-selector/",
          },
          {
            title: ":only-child",
            url: "http://api.jquery.com/only-child-selector/",
          },
        ],
      },
      {
        title: "Content Filters",
        children: [
          {
            title: ":contains()",
            url: "http://api.jquery.com/contains-selector/",
          },
          {
            title: ":empty",
            url: "http://api.jquery.com/empty-selector/",
          },
          {
            title: ":has()",
            url: "http://api.jquery.com/has-selector/",
          },
          {
            title: ":parent",
            url: "http://api.jquery.com/parent-selector/",
          },
        ],
      },
      {
        title: "Hierarchy",
        children: [
          {
            title: "parent &gt; child",
            url: "http://api.jquery.com/child-selector/",
          },
          {
            title: "ancestor descendant",
            url: "http://api.jquery.com/descendant-selector/",
          },
          {
            title: "prev + next",
            url: "http://api.jquery.com/next-adjacent-Selector/",
          },
          {
            title: "prev ~ siblings",
            url: "http://api.jquery.com/next-siblings-selector/",
          },
        ],
      },
    ],
  },
  {
    title: "Attributes / CSS",
    children: [
      {
        title: "Attributes",
        children: [
          {
            title: ".attr()",
            url: "http://api.jquery.com/attr/",
          },
          {
            title: ".prop()",
            url: "http://api.jquery.com/prop/",
          },
          {
            title: ".removeAttr()",
            url: "http://api.jquery.com/removeAttr/",
          },
          {
            title: ".removeProp()",
            url: "http://api.jquery.com/removeProp/",
          },
          {
            title: ".val()",
            url: "http://api.jquery.com/val/",
          },
        ],
      },
      {
        title: "CSS",
        children: [
          {
            title: ".addClass()",
            url: "http://api.jquery.com/addClass/",
          },
          {
            title: ".css()",
            url: "http://api.jquery.com/css/",
          },
          {
            title: "jQuery.cssHooks",
            url: "http://api.jquery.com/jQuery.cssHooks/",
          },
          {
            title: ".hasClass()",
            url: "http://api.jquery.com/hasClass/",
          },
          {
            title: ".removeClass()",
            url: "http://api.jquery.com/removeClass/",
          },
          {
            title: ".toggleClass()",
            url: "http://api.jquery.com/toggleClass/",
          },
        ],
      },
      {
        title: "Dimensions",
        children: [
          {
            title: ".height()",
            url: "http://api.jquery.com/height/",
          },
          {
            title: ".innerHeight()",
            url: "http://api.jquery.com/innerHeight/",
          },
          {
            title: ".innerWidth()",
            url: "http://api.jquery.com/innerWidth/",
          },
          {
            title: ".outerHeight()",
            url: "http://api.jquery.com/outerHeight/",
          },
          {
            title: ".outerWidth()",
            url: "http://api.jquery.com/outerWidth/",
          },
          {
            title: ".width()",
            url: "http://api.jquery.com/width/",
          },
        ],
      },
      {
        title: "Offset",
        children: [
          {
            title: ".offset()",
            url: "http://api.jquery.com/offset/",
          },
          {
            title: ".offsetParent()",
            url: "http://api.jquery.com/offsetParent/",
          },
          {
            title: ".position()",
            url: "http://api.jquery.com/position/",
          },
          {
            title: ".scrollLeft()",
            url: "http://api.jquery.com/scrollLeft/",
          },
          {
            title: ".scrollTop()",
            url: "http://api.jquery.com/scrollTop/",
          },
        ],
      },
      {
        title: "Data",
        children: [
          {
            title: "jQuery.data()",
            url: "http://api.jquery.com/jQuery.data/",
          },
          {
            title: ".data()",
            url: "http://api.jquery.com/data/",
          },
          {
            title: "jQuery.hasData()",
            url: "http://api.jquery.com/jQuery.hasData/",
          },
          {
            title: "jQuery.removeData()",
            url: "http://api.jquery.com/jQuery.removeData/",
          },
          {
            title: ".removeData()",
            url: "http://api.jquery.com/removeData/",
          },
        ],
      },
    ],
  },
  {
    title: "Manipulation",
    children: [
      {
        title: "Copying",
        children: [
          {
            title: ".clone()",
            url: "http://api.jquery.com/clone/",
          },
        ],
      },
      {
        title: "DOM Insertion, Around",
        children: [
          {
            title: ".wrap()",
            url: "http://api.jquery.com/wrap/",
          },
          {
            title: ".wrapAll()",
            url: "http://api.jquery.com/wrapAll/",
          },
          {
            title: ".wrapInner()",
            url: "http://api.jquery.com/wrapInner/",
          },
        ],
      },
      {
        title: "DOM Insertion, Inside",
        children: [
          {
            title: ".append()",
            url: "http://api.jquery.com/append/",
          },
          {
            title: ".appendTo()",
            url: "http://api.jquery.com/appendTo/",
          },
          {
            title: ".html()",
            url: "http://api.jquery.com/html/",
          },
          {
            title: ".prepend()",
            url: "http://api.jquery.com/prepend/",
          },
          {
            title: ".prependTo()",
            url: "http://api.jquery.com/prependTo/",
          },
          {
            title: ".text()",
            url: "http://api.jquery.com/text/",
          },
        ],
      },
      {
        title: "DOM Insertion, Outside",
        children: [
          {
            title: ".after()",
            url: "http://api.jquery.com/after/",
          },
          {
            title: ".before()",
            url: "http://api.jquery.com/before/",
          },
          {
            title: ".insertAfter()",
            url: "http://api.jquery.com/insertAfter/",
          },
          {
            title: ".insertBefore()",
            url: "http://api.jquery.com/insertBefore/",
          },
        ],
      },
      {
        title: "DOM Removal",
        children: [
          {
            title: ".detach()",
            url: "http://api.jquery.com/detach/",
          },
          {
            title: ".empty()",
            url: "http://api.jquery.com/empty/",
          },
          {
            title: ".remove()",
            url: "http://api.jquery.com/remove/",
          },
          {
            title: ".unwrap()",
            url: "http://api.jquery.com/unwrap/",
          },
        ],
      },
      {
        title: "DOM Replacement",
        children: [
          {
            title: ".replaceAll()",
            url: "http://api.jquery.com/replaceAll/",
          },
          {
            title: ".replaceWith()",
            url: "http://api.jquery.com/replaceWith/",
          },
        ],
      },
    ],
  },
  {
    title: "Traversing",
    children: [
      {
        title: "Filtering",
        children: [
          {
            title: ".eq()",
            url: "http://api.jquery.com/eq/",
          },
          {
            title: ".filter()",
            url: "http://api.jquery.com/filter/",
          },
          {
            title: ".first()",
            url: "http://api.jquery.com/first/",
          },
          {
            title: ".has()",
            url: "http://api.jquery.com/has/",
          },
          {
            title: ".is()",
            url: "http://api.jquery.com/is/",
          },
          {
            title: ".last()",
            url: "http://api.jquery.com/last/",
          },
          {
            title: ".map()",
            url: "http://api.jquery.com/map/",
          },
          {
            title: ".not()",
            url: "http://api.jquery.com/not/",
          },
          {
            title: ".slice()",
            url: "http://api.jquery.com/slice/",
          },
        ],
      },
      {
        title: "Miscellaneous Traversing",
        children: [
          {
            title: ".add()",
            url: "http://api.jquery.com/add/",
          },
          {
            title: ".andSelf()",
            url: "http://api.jquery.com/andSelf/",
          },
          {
            title: ".contents()",
            url: "http://api.jquery.com/contents/",
          },
          {
            title: ".end()",
            url: "http://api.jquery.com/end/",
          },
        ],
      },
      {
        title: "Tree Traversal",
        children: [
          {
            title: ".children()",
            url: "http://api.jquery.com/children/",
          },
          {
            title: ".closest()",
            url: "http://api.jquery.com/closest/",
          },
          {
            title: ".find()",
            url: "http://api.jquery.com/find/",
          },
          {
            title: ".next()",
            url: "http://api.jquery.com/next/",
          },
          {
            title: ".nextAll()",
            url: "http://api.jquery.com/nextAll/",
          },
          {
            title: ".nextUntil()",
            url: "http://api.jquery.com/nextUntil/",
          },
          {
            title: ".parent()",
            url: "http://api.jquery.com/parent/",
          },
          {
            title: ".parents()",
            url: "http://api.jquery.com/parents/",
          },
          {
            title: ".parentsUntil()",
            url: "http://api.jquery.com/parentsUntil/",
          },
          {
            title: ".prev()",
            url: "http://api.jquery.com/prev/",
          },
          {
            title: ".prevAll()",
            url: "http://api.jquery.com/prevAll/",
          },
          {
            title: ".prevUntil()",
            url: "http://api.jquery.com/prevUntil/",
          },
          {
            title: ".siblings()",
            url: "http://api.jquery.com/siblings/",
          },
        ],
      },
    ],
  },
  {
    title: "Events",
    children: [
      {
        title: "Event Object",
        children: [
          {
            title: "event.currentTarget",
            url: "http://api.jquery.com/event.currentTarget/",
          },
          {
            title: "event.data",
            url: "http://api.jquery.com/event.data/",
          },
          {
            title: "event.isDefaultPrevented()",
            url: "http://api.jquery.com/event.isDefaultPrevented/",
          },
          {
            title: "event.isImmediatePropagationStopped()",
            url: "http://api.jquery.com/event.isImmediatePropagationStopped/",
          },
          {
            title: "event.isPropagationStopped()",
            url: "http://api.jquery.com/event.isPropagationStopped/",
          },
          {
            title: "event.namespace",
            url: "http://api.jquery.com/event.namespace/",
          },
          {
            title: "event.pageX",
            url: "http://api.jquery.com/event.pageX/",
          },
          {
            title: "event.pageY",
            url: "http://api.jquery.com/event.pageY/",
          },
          {
            title: "event.preventDefault()",
            url: "http://api.jquery.com/event.preventDefault/",
          },
          {
            title: "event.relatedTarget",
            url: "http://api.jquery.com/event.relatedTarget/",
          },
          {
            title: "event.result",
            url: "http://api.jquery.com/event.result/",
          },
          {
            title: "event.stopImmediatePropagation()",
            url: "http://api.jquery.com/event.stopImmediatePropagation/",
          },
          {
            title: "event.stopPropagation()",
            url: "http://api.jquery.com/event.stopPropagation/",
          },
          {
            title: "event.target",
            url: "http://api.jquery.com/event.target/",
          },
          {
            title: "event.timeStamp",
            url: "http://api.jquery.com/event.timeStamp/",
          },
          {
            title: "event.type",
            url: "http://api.jquery.com/event.type/",
          },
          {
            title: "event.which",
            url: "http://api.jquery.com/event.which/",
          },
        ],
      },
      {
        title: "Mouse Events",
        children: [
          {
            title: ".click()",
            url: "http://api.jquery.com/click/",
          },
          {
            title: ".dblclick()",
            url: "http://api.jquery.com/dblclick/",
          },
          {
            title: ".focusin()",
            url: "http://api.jquery.com/focusin/",
          },
          {
            title: ".focusout()",
            url: "http://api.jquery.com/focusout/",
          },
          {
            title: ".hover()",
            url: "http://api.jquery.com/hover/",
          },
          {
            title: ".mousedown()",
            url: "http://api.jquery.com/mousedown/",
          },
          {
            title: ".mouseenter()",
            url: "http://api.jquery.com/mouseenter/",
          },
          {
            title: ".mouseleave()",
            url: "http://api.jquery.com/mouseleave/",
          },
          {
            title: ".mousemove()",
            url: "http://api.jquery.com/mousemove/",
          },
          {
            title: ".mouseout()",
            url: "http://api.jquery.com/mouseout/",
          },
          {
            title: ".mouseover()",
            url: "http://api.jquery.com/mouseover/",
          },
          {
            title: ".mouseup()",
            url: "http://api.jquery.com/mouseup/",
          },
          {
            title: ".toggle()",
            url: "http://api.jquery.com/toggle-event/",
          },
        ],
      },
      {
        title: "Browser Events",
        children: [
          {
            title: ".error()",
            url: "http://api.jquery.com/error/",
          },
          {
            title: ".resize()",
            url: "http://api.jquery.com/resize/",
          },
          {
            title: ".scroll()",
            url: "http://api.jquery.com/scroll/",
          },
        ],
      },
      {
        title: "Document Loading",
        children: [
          {
            title: ".holdReady()",
            url: "http://api.jquery.com/jQuery.holdReady/",
          },
          {
            title: ".load()",
            url: "http://api.jquery.com/load-event/",
          },
          {
            title: ".ready()",
            url: "http://api.jquery.com/ready/",
          },
          {
            title: ".unload()",
            url: "http://api.jquery.com/unload/",
          },
        ],
      },
      {
        title: "Event Handler Attachment",
        children: [
          {
            title: ".bind()",
            url: "http://api.jquery.com/bind/",
          },
          {
            title: ".delegate()",
            url: "http://api.jquery.com/delegate/",
          },
          {
            title: ".die()",
            url: "http://api.jquery.com/die/",
          },
          {
            title: ".live()",
            url: "http://api.jquery.com/live/",
          },
          {
            title: ".off()",
            url: "http://api.jquery.com/off/",
          },
          {
            title: ".on()",
            url: "http://api.jquery.com/on/",
          },
          {
            title: ".one()",
            url: "http://api.jquery.com/one/",
          },
          {
            title: ".trigger()",
            url: "http://api.jquery.com/trigger/",
          },
          {
            title: ".triggerHandler()",
            url: "http://api.jquery.com/triggerHandler/",
          },
          {
            title: ".unbind()",
            url: "http://api.jquery.com/unbind/",
          },
          {
            title: ".undelegate()",
            url: "http://api.jquery.com/undelegate/",
          },
        ],
      },
      {
        title: "Form Events",
        children: [
          {
            title: ".blur()",
            url: "http://api.jquery.com/blur/",
          },
          {
            title: ".change()",
            url: "http://api.jquery.com/change/",
          },
          {
            title: ".focus()",
            url: "http://api.jquery.com/focus/",
          },
          {
            title: ".select()",
            url: "http://api.jquery.com/select/",
          },
          {
            title: ".submit()",
            url: "http://api.jquery.com/submit/",
          },
        ],
      },
      {
        title: "Keyboard Events",
        children: [
          {
            title: ".keydown()",
            url: "http://api.jquery.com/keydown/",
          },
          {
            title: ".keypress()",
            url: "http://api.jquery.com/keypress/",
          },
          {
            title: ".keyup()",
            url: "http://api.jquery.com/keyup/",
          },
        ],
      },
    ],
  },
  {
    title: "Effects",
    children: [
      {
        title: "Basics",
        children: [
          {
            title: ".hide()",
            url: "http://api.jquery.com/hide/",
          },
          {
            title: ".show()",
            url: "http://api.jquery.com/show/",
          },
          {
            title: ".toggle()",
            url: "http://api.jquery.com/toggle/",
          },
        ],
      },
      {
        title: "Custom",
        children: [
          {
            title: ".animate()",
            url: "http://api.jquery.com/animate",
          },
          {
            title: ".clearQueue()",
            url: "http://api.jquery.com/clearQueue",
          },
          {
            title: ".delay()",
            url: "http://api.jquery.com/delay",
          },
          {
            title: ".dequeue()",
            url: "http://api.jquery.com/dequeue",
          },
          {
            title: "jQuery.dequeue()",
            url: "http://api.jquery.com/jQuery.dequeue/",
          },
          {
            title: "jQuery.fx.interval",
            url: "http://api.jquery.com/jQuery.fx.interval",
          },
          {
            title: "jQuery.fx.off",
            url: "http://api.jquery.com/jQuery.fx.off",
          },
          {
            title: ".queue()",
            url: "http://api.jquery.com/queue",
          },
          {
            title: "jQuery.queue()",
            url: "http://api.jquery.com/jQuery.queue/",
          },
          {
            title: ".stop()",
            url: "http://api.jquery.com/stop",
          },
        ],
      },
      {
        title: "Fading",
        children: [
          {
            title: ".fadeIn()",
            url: "http://api.jquery.com/fadeIn/",
          },
          {
            title: ".fadeOut()",
            url: "http://api.jquery.com/fadeOut/",
          },
          {
            title: ".fadeTo()",
            url: "http://api.jquery.com/fadeTo/",
          },
          {
            title: ".fadeToggle()",
            url: "http://api.jquery.com/fadeToggle/",
          },
        ],
      },
      {
        title: "Sliding",
        children: [
          {
            title: ".slideDown()",
            url: "http://api.jquery.com/slideDown",
          },
          {
            title: ".slideToggle()",
            url: "http://api.jquery.com/slideToggle",
          },
          {
            title: ".slideUp()",
            url: "http://api.jquery.com/slideUp",
          },
        ],
      },
    ],
  },
  {
    title: "Ajax",
    children: [
      {
        title: "Global Ajax Event Handlers",
        children: [
          {
            title: ".ajaxComplete()",
            url: "http://api.jquery.com/ajaxComplete/",
          },
          {
            title: ".ajaxError()",
            url: "http://api.jquery.com/ajaxError/",
          },
          {
            title: ".ajaxSend()",
            url: "http://api.jquery.com/ajaxSend/",
          },
          {
            title: ".ajaxStart()",
            url: "http://api.jquery.com/ajaxStart/",
          },
          {
            title: ".ajaxStop()",
            url: "http://api.jquery.com/ajaxStop/",
          },
          {
            title: ".ajaxSuccess()",
            url: "http://api.jquery.com/ajaxSuccess/",
          },
        ],
      },
      {
        title: "Helper Functions",
        children: [
          {
            title: "jQuery.param()",
            url: "http://api.jquery.com/jQuery.param/",
          },
          {
            title: ".serialize()",
            url: "http://api.jquery.com/serialize/",
          },
          {
            title: ".serializeArray()",
            url: "http://api.jquery.com/serializeArray/",
          },
        ],
      },
      {
        title: "Low-Level Interface",
        children: [
          {
            title: "jQuery.ajax()",
            url: "http://api.jquery.com/jQuery.ajax/",
          },
          {
            title: "jQuery.ajaxSetup()",
            url: "http://api.jquery.com/jQuery.ajaxSetup",
          },
        ],
      },
      {
        title: "Shorthand Methods",
        children: [
          {
            title: "jQuery.get()",
            url: "http://api.jquery.com/jQuery.get/",
          },
          {
            title: "jQuery.getJSON()",
            url: "http://api.jquery.com/jQuery.getJSON/",
          },
          {
            title: "jQuery.getScript()",
            url: "http://api.jquery.com/jQuery.getScript/",
          },
          {
            title: ".load()",
            url: "http://api.jquery.com/load/",
          },
          {
            title: "jQuery.post()",
            url: "http://api.jquery.com/jQuery.post/",
          },
        ],
      },
    ],
  },
  {
    title: "Core",
    children: [
      {
        title: "jQuery Object",
        children: [
          {
            title: "jQuery()",
            url: "http://api.jquery.com/jQuery/",
          },
          {
            title: "jQuery.noConflict()",
            url: "http://api.jquery.com/jQuery.noConflict/",
          },
          {
            title: "jQuery.sub()",
            url: "http://api.jquery.com/jQuery.sub/",
          },
          {
            title: "jQuery.when()",
            url: "http://api.jquery.com/jQuery.when/",
          },
        ],
      },
      {
        title: "DOM Element Methods",
        children: [
          {
            title: ".get()",
            url: "http://api.jquery.com/get/",
          },
          {
            title: ".index()",
            url: "http://api.jquery.com/index/",
          },
          {
            title: ".size()",
            url: "http://api.jquery.com/size/",
          },
          {
            title: "toArray()",
            url: "http://api.jquery.com/toArray/",
          },
        ],
      },
      {
        title: "Internals",
        children: [
          {
            title: ".jquery",
            url: "http://api.jquery.com/.jquery/",
          },
          {
            title: ".context",
            url: "http://api.jquery.com/context/",
          },
          {
            title: "jQuery.error",
            url: "http://api.jquery.com/jQuery.error/",
          },
          {
            title: ".length",
            url: "http://api.jquery.com/length/",
          },
          {
            title: ".pushStack()",
            url: "http://api.jquery.com/pushStack/",
          },
          {
            title: ".selector",
            url: "http://api.jquery.com/selector/",
          },
        ],
      },
      {
        title: "Deferred Object",
        children: [
          {
            title: "deferred.always()",
            url: "http://api.jquery.com/deferred.always/",
          },
          {
            title: "deferred.done()",
            url: "http://api.jquery.com/deferred.done/",
          },
          {
            title: "deferred.fail()",
            url: "http://api.jquery.com/deferred.fail/",
          },
          {
            title: "deferred.isRejected()",
            url: "http://api.jquery.com/deferred.isRejected/",
          },
          {
            title: "deferred.isResolved()",
            url: "http://api.jquery.com/deferred.isResolved/",
          },
          {
            title: "deferred.notify()",
            url: "http://api.jquery.com/deferred.notify/",
          },
          {
            title: "deferred.notifyWith()",
            url: "http://api.jquery.com/deferred.notifyWith/",
          },
          {
            title: "deferred.pipe()",
            url: "http://api.jquery.com/deferred.pipe/",
          },
          {
            title: "deferred.progress()",
            url: "http://api.jquery.com/deferred.progress/",
          },
          {
            title: "deferred.promise()",
            url: "http://api.jquery.com/deferred.promise/",
          },
          {
            title: "deferred.reject()",
            url: "http://api.jquery.com/deferred.reject/",
          },
          {
            title: "deferred.rejectWith()",
            url: "http://api.jquery.com/deferred.rejectWith/",
          },
          {
            title: "deferred.resolve()",
            url: "http://api.jquery.com/deferred.resolve/",
          },
          {
            title: "deferred.resolveWith()",
            url: "http://api.jquery.com/deferred.resolveWith/",
          },
          {
            title: "deferred.state()",
            url: "http://api.jquery.com/deferred.state/",
          },
          {
            title: "deferred.then()",
            url: "http://api.jquery.com/deferred.then/",
          },
          {
            title: ".promise()",
            url: "http://api.jquery.com/promise/",
          },
        ],
      },
      {
        title: "Callbacks Object",
        children: [
          {
            title: "jQuery.Callbacks()",
            url: "http://api.jquery.com/jQuery.Callbacks/",
          },
          {
            title: "callbacks.add()",
            url: "http://api.jquery.com/callbacks.add/",
          },
          {
            title: "callbacks.disable()",
            url: "http://api.jquery.com/callbacks.disable/",
          },
          {
            title: "callbacks.empty()",
            url: "http://api.jquery.com/callbacks.empty/",
          },
          {
            title: "callbacks.fire()",
            url: "http://api.jquery.com/callbacks.fire/",
          },
          {
            title: "callbacks.fired()",
            url: "http://api.jquery.com/callbacks.fired/",
          },
          {
            title: "callbacks.fireWith()",
            url: "http://api.jquery.com/callbacks.fireWith/",
          },
          {
            title: "callbacks.has()",
            url: "http://api.jquery.com/callbacks.has/",
          },
          {
            title: "callbacks.lock()",
            url: "http://api.jquery.com/callbacks.lock/",
          },
          {
            title: "callbacks.locked()",
            url: "http://api.jquery.com/callbacks.locked/",
          },
          {
            title: "callbacks.remove()",
            url: "http://api.jquery.com/callbacks.remove/",
          },
        ],
      },
    ],
  },
  {
    title: "Utilities",
    children: [
      {
        title: "Utilities",
        children: [
          {
            title: "jQuery.browser",
            url: "http://api.jquery.com/jQuery.browser/",
          },
          {
            title: "jQuery.contains()",
            url: "http://api.jquery.com/jQuery.contains/",
          },
          {
            title: "each",
            url: "http://api.jquery.com/each/",
          },
          {
            title: "jQuery.each()",
            url: "http://api.jquery.com/jQuery.each/",
          },
          {
            title: "jQuery.extend()",
            url: "http://api.jquery.com/jQuery.extend/",
          },
          {
            title: "jQuery.globalEval()",
            url: "http://api.jquery.com/jQuery.globalEval/",
          },
          {
            title: "jQuery.grep()",
            url: "http://api.jquery.com/jQuery.grep/",
          },
          {
            title: "jQuery.inArray()",
            url: "http://api.jquery.com/jQuery.inArray/",
          },
          {
            title: "jQuery.isArray()",
            url: "http://api.jquery.com/jQuery.isArray/",
          },
          {
            title: "jQuery.isEmptyObject()",
            url: "http://api.jquery.com/jQuery.isEmptyObject/",
          },
          {
            title: "jQuery.isFunction()",
            url: "http://api.jquery.com/jQuery.isFunction/",
          },
          {
            title: "jQuery.isNumeric()",
            url: "http://api.jquery.com/jQuery.isNumeric/",
          },
          {
            title: "jQuery.isPlainObject()",
            url: "http://api.jquery.com/jQuery.isPlainObject/",
          },
          {
            title: "jQuery.isWindow()",
            url: "http://api.jquery.com/jQuery.isWindow/",
          },
          {
            title: "jQuery.isXMLDoc()",
            url: "http://api.jquery.com/jQuery.isXMLDoc/",
          },
          {
            title: "jQuery.makeArray()",
            url: "http://api.jquery.com/jQuery.makeArray/",
          },
          {
            title: "jQuery.map()",
            url: "http://api.jquery.com/jQuery.map/",
          },
          {
            title: "jQuery.merge()",
            url: "http://api.jquery.com/jQuery.merge/",
          },
          {
            title: "jQuery.noop()",
            url: "http://api.jquery.com/jQuery.noop/",
          },
          {
            title: "jQuery.now()",
            url: "http://api.jquery.com/jQuery.now/",
          },
          {
            title: "jQuery.parseJSON()",
            url: "http://api.jquery.com/jQuery.parseJSON/",
          },
          {
            title: "jQuery.parseXML()",
            url: "http://api.jquery.com/jQuery.parseXML/",
          },
          {
            title: "jQuery.proxy()",
            url: "http://api.jquery.com/jQuery.proxy/",
          },
          {
            title: "jQuery.support",
            url: "http://api.jquery.com/jQuery.support/",
          },
          {
            title: "jQuery.trim()",
            url: "http://api.jquery.com/jQuery.trim/",
          },
          {
            title: "jQuery.type()",
            url: "http://api.jquery.com/jQuery.type/",
          },
          {
            title: "jQuery.unique()",
            url: "http://api.jquery.com/jQuery.unique/",
          },
        ],
      },
    ],
  },
];
