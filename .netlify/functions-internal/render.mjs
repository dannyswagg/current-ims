import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Icons/accessibility-outline.svg","Icons/accessibility-sharp.svg","Icons/accessibility.svg","Icons/add-circle-outline.svg","Icons/add-circle-sharp.svg","Icons/add-circle.svg","Icons/add-outline.svg","Icons/add-sharp.svg","Icons/add.svg","Icons/airplane-outline.svg","Icons/airplane-sharp.svg","Icons/airplane.svg","Icons/alarm-outline.svg","Icons/alarm-sharp.svg","Icons/alarm.svg","Icons/albums-outline.svg","Icons/albums-sharp.svg","Icons/albums.svg","Icons/alert-circle-outline.svg","Icons/alert-circle-sharp.svg","Icons/alert-circle.svg","Icons/alert-outline.svg","Icons/alert-sharp.svg","Icons/alert.svg","Icons/american-football-outline.svg","Icons/american-football-sharp.svg","Icons/american-football.svg","Icons/analytics-outline.svg","Icons/analytics-sharp.svg","Icons/analytics.svg","Icons/aperture-outline.svg","Icons/aperture-sharp.svg","Icons/aperture.svg","Icons/apps-outline.svg","Icons/apps-sharp.svg","Icons/apps.svg","Icons/archive-outline.svg","Icons/archive-sharp.svg","Icons/archive.svg","Icons/arrow-back-circle-outline.svg","Icons/arrow-back-circle-sharp.svg","Icons/arrow-back-circle.svg","Icons/arrow-back-outline.svg","Icons/arrow-back-sharp.svg","Icons/arrow-back.svg","Icons/arrow-down-circle-outline.svg","Icons/arrow-down-circle-sharp.svg","Icons/arrow-down-circle.svg","Icons/arrow-down-outline.svg","Icons/arrow-down-sharp.svg","Icons/arrow-down.svg","Icons/arrow-forward-circle-outline.svg","Icons/arrow-forward-circle-sharp.svg","Icons/arrow-forward-circle.svg","Icons/arrow-forward-outline.svg","Icons/arrow-forward-sharp.svg","Icons/arrow-forward.svg","Icons/arrow-redo-circle-outline.svg","Icons/arrow-redo-circle-sharp.svg","Icons/arrow-redo-circle.svg","Icons/arrow-redo-outline.svg","Icons/arrow-redo-sharp.svg","Icons/arrow-redo.svg","Icons/arrow-undo-circle-outline.svg","Icons/arrow-undo-circle-sharp.svg","Icons/arrow-undo-circle.svg","Icons/arrow-undo-outline.svg","Icons/arrow-undo-sharp.svg","Icons/arrow-undo.svg","Icons/arrow-up-circle-outline.svg","Icons/arrow-up-circle-sharp.svg","Icons/arrow-up-circle.svg","Icons/arrow-up-outline.svg","Icons/arrow-up-sharp.svg","Icons/arrow-up.svg","Icons/at-circle-outline.svg","Icons/at-circle-sharp.svg","Icons/at-circle.svg","Icons/at-outline.svg","Icons/at-sharp.svg","Icons/at.svg","Icons/attach-outline.svg","Icons/attach-sharp.svg","Icons/attach.svg","Icons/backspace-outline.svg","Icons/backspace-sharp.svg","Icons/backspace.svg","Icons/bag-add-outline.svg","Icons/bag-add-sharp.svg","Icons/bag-add.svg","Icons/bag-check-outline.svg","Icons/bag-check-sharp.svg","Icons/bag-check.svg","Icons/bag-handle-outline.svg","Icons/bag-handle-sharp.svg","Icons/bag-handle.svg","Icons/bag-outline.svg","Icons/bag-remove-outline.svg","Icons/bag-remove-sharp.svg","Icons/bag-remove.svg","Icons/bag-sharp.svg","Icons/bag.svg","Icons/balloon-outline.svg","Icons/balloon-sharp.svg","Icons/balloon.svg","Icons/ban-outline.svg","Icons/ban-sharp.svg","Icons/ban.svg","Icons/bandage-outline.svg","Icons/bandage-sharp.svg","Icons/bandage.svg","Icons/bar-chart-outline.svg","Icons/bar-chart-sharp.svg","Icons/bar-chart.svg","Icons/barbell-outline.svg","Icons/barbell-sharp.svg","Icons/barbell.svg","Icons/barcode-outline.svg","Icons/barcode-sharp.svg","Icons/barcode.svg","Icons/baseball-outline.svg","Icons/baseball-sharp.svg","Icons/baseball.svg","Icons/basket-outline.svg","Icons/basket-sharp.svg","Icons/basket.svg","Icons/basketball-outline.svg","Icons/basketball-sharp.svg","Icons/basketball.svg","Icons/battery-charging-outline.svg","Icons/battery-charging-sharp.svg","Icons/battery-charging.svg","Icons/battery-dead-outline.svg","Icons/battery-dead-sharp.svg","Icons/battery-dead.svg","Icons/battery-full-outline.svg","Icons/battery-full-sharp.svg","Icons/battery-full.svg","Icons/battery-half-outline.svg","Icons/battery-half-sharp.svg","Icons/battery-half.svg","Icons/beaker-outline.svg","Icons/beaker-sharp.svg","Icons/beaker.svg","Icons/bed-outline.svg","Icons/bed-sharp.svg","Icons/bed.svg","Icons/beer-outline.svg","Icons/beer-sharp.svg","Icons/beer.svg","Icons/bicycle-outline.svg","Icons/bicycle-sharp.svg","Icons/bicycle.svg","Icons/bluetooth-outline.svg","Icons/bluetooth-sharp.svg","Icons/bluetooth.svg","Icons/boat-outline.svg","Icons/boat-sharp.svg","Icons/boat.svg","Icons/body-outline.svg","Icons/body-sharp.svg","Icons/body.svg","Icons/bonfire-outline.svg","Icons/bonfire-sharp.svg","Icons/bonfire.svg","Icons/book-outline.svg","Icons/book-sharp.svg","Icons/book.svg","Icons/bookmark-outline.svg","Icons/bookmark-sharp.svg","Icons/bookmark.svg","Icons/bookmarks-outline.svg","Icons/bookmarks-sharp.svg","Icons/bookmarks.svg","Icons/bowling-ball-outline.svg","Icons/bowling-ball-sharp.svg","Icons/bowling-ball.svg","Icons/briefcase-outline.svg","Icons/briefcase-sharp.svg","Icons/briefcase.svg","Icons/browsers-outline.svg","Icons/browsers-sharp.svg","Icons/browsers.svg","Icons/brush-outline.svg","Icons/brush-sharp.svg","Icons/brush.svg","Icons/bug-outline.svg","Icons/bug-sharp.svg","Icons/bug.svg","Icons/build-outline.svg","Icons/build-sharp.svg","Icons/build.svg","Icons/bulb-outline.svg","Icons/bulb-sharp.svg","Icons/bulb.svg","Icons/bus-outline.svg","Icons/bus-sharp.svg","Icons/bus.svg","Icons/business-outline.svg","Icons/business-sharp.svg","Icons/business.svg","Icons/cafe-outline.svg","Icons/cafe-sharp.svg","Icons/cafe.svg","Icons/calculator-outline.svg","Icons/calculator-sharp.svg","Icons/calculator.svg","Icons/calendar-clear-outline.svg","Icons/calendar-clear-sharp.svg","Icons/calendar-clear.svg","Icons/calendar-number-outline.svg","Icons/calendar-number-sharp.svg","Icons/calendar-number.svg","Icons/calendar-outline.svg","Icons/calendar-sharp.svg","Icons/calendar.svg","Icons/call-outline.svg","Icons/call-sharp.svg","Icons/call.svg","Icons/camera-outline.svg","Icons/camera-reverse-outline.svg","Icons/camera-reverse-sharp.svg","Icons/camera-reverse.svg","Icons/camera-sharp.svg","Icons/camera.svg","Icons/car-outline.svg","Icons/car-sharp.svg","Icons/car-sport-outline.svg","Icons/car-sport-sharp.svg","Icons/car-sport.svg","Icons/car.svg","Icons/card-outline.svg","Icons/card-sharp.svg","Icons/card.svg","Icons/caret-back-circle-outline.svg","Icons/caret-back-circle-sharp.svg","Icons/caret-back-circle.svg","Icons/caret-back-outline.svg","Icons/caret-back-sharp.svg","Icons/caret-back.svg","Icons/caret-down-circle-outline.svg","Icons/caret-down-circle-sharp.svg","Icons/caret-down-circle.svg","Icons/caret-down-outline.svg","Icons/caret-down-sharp.svg","Icons/caret-down.svg","Icons/caret-forward-circle-outline.svg","Icons/caret-forward-circle-sharp.svg","Icons/caret-forward-circle.svg","Icons/caret-forward-outline.svg","Icons/caret-forward-sharp.svg","Icons/caret-forward.svg","Icons/caret-up-circle-outline.svg","Icons/caret-up-circle-sharp.svg","Icons/caret-up-circle.svg","Icons/caret-up-outline.svg","Icons/caret-up-sharp.svg","Icons/caret-up.svg","Icons/cart-outline.svg","Icons/cart-sharp.svg","Icons/cart.svg","Icons/cash-outline.svg","Icons/cash-sharp.svg","Icons/cash.svg","Icons/cellular-outline.svg","Icons/cellular-sharp.svg","Icons/cellular.svg","Icons/chatbox-ellipses-outline.svg","Icons/chatbox-ellipses-sharp.svg","Icons/chatbox-ellipses.svg","Icons/chatbox-outline.svg","Icons/chatbox-sharp.svg","Icons/chatbox.svg","Icons/chatbubble-ellipses-outline.svg","Icons/chatbubble-ellipses-sharp.svg","Icons/chatbubble-ellipses.svg","Icons/chatbubble-outline.svg","Icons/chatbubble-sharp.svg","Icons/chatbubble.svg","Icons/chatbubbles-outline.svg","Icons/chatbubbles-sharp.svg","Icons/chatbubbles.svg","Icons/checkbox-outline.svg","Icons/checkbox-sharp.svg","Icons/checkbox.svg","Icons/checkmark-circle-outline.svg","Icons/checkmark-circle-sharp.svg","Icons/checkmark-circle.svg","Icons/checkmark-done-circle-outline.svg","Icons/checkmark-done-circle-sharp.svg","Icons/checkmark-done-circle.svg","Icons/checkmark-done-outline.svg","Icons/checkmark-done-sharp.svg","Icons/checkmark-done.svg","Icons/checkmark-outline.svg","Icons/checkmark-sharp.svg","Icons/checkmark.svg","Icons/chevron-back-circle-outline.svg","Icons/chevron-back-circle-sharp.svg","Icons/chevron-back-circle.svg","Icons/chevron-back-outline.svg","Icons/chevron-back-sharp.svg","Icons/chevron-back.svg","Icons/chevron-collapse-outline.svg","Icons/chevron-collapse-sharp.svg","Icons/chevron-collapse.svg","Icons/chevron-down-circle-outline.svg","Icons/chevron-down-circle-sharp.svg","Icons/chevron-down-circle.svg","Icons/chevron-down-outline.svg","Icons/chevron-down-sharp.svg","Icons/chevron-down.svg","Icons/chevron-expand-outline.svg","Icons/chevron-expand-sharp.svg","Icons/chevron-expand.svg","Icons/chevron-forward-circle-outline.svg","Icons/chevron-forward-circle-sharp.svg","Icons/chevron-forward-circle.svg","Icons/chevron-forward-outline.svg","Icons/chevron-forward-sharp.svg","Icons/chevron-forward.svg","Icons/chevron-up-circle-outline.svg","Icons/chevron-up-circle-sharp.svg","Icons/chevron-up-circle.svg","Icons/chevron-up-outline.svg","Icons/chevron-up-sharp.svg","Icons/chevron-up.svg","Icons/clipboard-outline.svg","Icons/clipboard-sharp.svg","Icons/clipboard.svg","Icons/close-circle-outline.svg","Icons/close-circle-sharp.svg","Icons/close-circle.svg","Icons/close-outline.svg","Icons/close-sharp.svg","Icons/close.svg","Icons/cloud-circle-outline.svg","Icons/cloud-circle-sharp.svg","Icons/cloud-circle.svg","Icons/cloud-done-outline.svg","Icons/cloud-done-sharp.svg","Icons/cloud-done.svg","Icons/cloud-download-outline.svg","Icons/cloud-download-sharp.svg","Icons/cloud-download.svg","Icons/cloud-offline-outline.svg","Icons/cloud-offline-sharp.svg","Icons/cloud-offline.svg","Icons/cloud-outline.svg","Icons/cloud-sharp.svg","Icons/cloud-upload-outline.svg","Icons/cloud-upload-sharp.svg","Icons/cloud-upload.svg","Icons/cloud.svg","Icons/cloudy-night-outline.svg","Icons/cloudy-night-sharp.svg","Icons/cloudy-night.svg","Icons/cloudy-outline.svg","Icons/cloudy-sharp.svg","Icons/cloudy.svg","Icons/code-download-outline.svg","Icons/code-download-sharp.svg","Icons/code-download.svg","Icons/code-outline.svg","Icons/code-sharp.svg","Icons/code-slash-outline.svg","Icons/code-slash-sharp.svg","Icons/code-slash.svg","Icons/code-working-outline.svg","Icons/code-working-sharp.svg","Icons/code-working.svg","Icons/code.svg","Icons/cog-outline.svg","Icons/cog-sharp.svg","Icons/cog.svg","Icons/color-fill-outline.svg","Icons/color-fill-sharp.svg","Icons/color-fill.svg","Icons/color-filter-outline.svg","Icons/color-filter-sharp.svg","Icons/color-filter.svg","Icons/color-palette-outline.svg","Icons/color-palette-sharp.svg","Icons/color-palette.svg","Icons/color-wand-outline.svg","Icons/color-wand-sharp.svg","Icons/color-wand.svg","Icons/compass-outline.svg","Icons/compass-sharp.svg","Icons/compass.svg","Icons/construct-outline.svg","Icons/construct-sharp.svg","Icons/construct.svg","Icons/contract-outline.svg","Icons/contract-sharp.svg","Icons/contract.svg","Icons/contrast-outline.svg","Icons/contrast-sharp.svg","Icons/contrast.svg","Icons/copy-outline.svg","Icons/copy-sharp.svg","Icons/copy.svg","Icons/create-outline.svg","Icons/create-sharp.svg","Icons/create.svg","Icons/crop-outline.svg","Icons/crop-sharp.svg","Icons/crop.svg","Icons/cube-outline.svg","Icons/cube-sharp.svg","Icons/cube.svg","Icons/cut-outline.svg","Icons/cut-sharp.svg","Icons/cut.svg","Icons/desktop-outline.svg","Icons/desktop-sharp.svg","Icons/desktop.svg","Icons/diamond-outline.svg","Icons/diamond-sharp.svg","Icons/diamond.svg","Icons/dice-outline.svg","Icons/dice-sharp.svg","Icons/dice.svg","Icons/disc-outline.svg","Icons/disc-sharp.svg","Icons/disc.svg","Icons/document-attach-outline.svg","Icons/document-attach-sharp.svg","Icons/document-attach.svg","Icons/document-lock-outline.svg","Icons/document-lock-sharp.svg","Icons/document-lock.svg","Icons/document-outline.svg","Icons/document-sharp.svg","Icons/document-text-outline.svg","Icons/document-text-sharp.svg","Icons/document-text.svg","Icons/document.svg","Icons/documents-outline.svg","Icons/documents-sharp.svg","Icons/documents.svg","Icons/download-outline.svg","Icons/download-sharp.svg","Icons/download.svg","Icons/duplicate-outline.svg","Icons/duplicate-sharp.svg","Icons/duplicate.svg","Icons/ear-outline.svg","Icons/ear-sharp.svg","Icons/ear.svg","Icons/earth-outline.svg","Icons/earth-sharp.svg","Icons/earth.svg","Icons/easel-outline.svg","Icons/easel-sharp.svg","Icons/easel.svg","Icons/egg-outline.svg","Icons/egg-sharp.svg","Icons/egg.svg","Icons/ellipse-outline.svg","Icons/ellipse-sharp.svg","Icons/ellipse.svg","Icons/ellipsis-horizontal-circle-outline.svg","Icons/ellipsis-horizontal-circle-sharp.svg","Icons/ellipsis-horizontal-circle.svg","Icons/ellipsis-horizontal-outline.svg","Icons/ellipsis-horizontal-sharp.svg","Icons/ellipsis-horizontal.svg","Icons/ellipsis-vertical-circle-outline.svg","Icons/ellipsis-vertical-circle-sharp.svg","Icons/ellipsis-vertical-circle.svg","Icons/ellipsis-vertical-outline.svg","Icons/ellipsis-vertical-sharp.svg","Icons/ellipsis-vertical.svg","Icons/enter-outline.svg","Icons/enter-sharp.svg","Icons/enter.svg","Icons/exit-outline.svg","Icons/exit-sharp.svg","Icons/exit.svg","Icons/expand-outline.svg","Icons/expand-sharp.svg","Icons/expand.svg","Icons/extension-puzzle-outline.svg","Icons/extension-puzzle-sharp.svg","Icons/extension-puzzle.svg","Icons/eye-off-outline.svg","Icons/eye-off-sharp.svg","Icons/eye-off.svg","Icons/eye-outline.svg","Icons/eye-sharp.svg","Icons/eye.svg","Icons/eyedrop-outline.svg","Icons/eyedrop-sharp.svg","Icons/eyedrop.svg","Icons/fast-food-outline.svg","Icons/fast-food-sharp.svg","Icons/fast-food.svg","Icons/female-outline.svg","Icons/female-sharp.svg","Icons/female.svg","Icons/file-tray-full-outline.svg","Icons/file-tray-full-sharp.svg","Icons/file-tray-full.svg","Icons/file-tray-outline.svg","Icons/file-tray-sharp.svg","Icons/file-tray-stacked-outline.svg","Icons/file-tray-stacked-sharp.svg","Icons/file-tray-stacked.svg","Icons/file-tray.svg","Icons/film-outline.svg","Icons/film-sharp.svg","Icons/film.svg","Icons/filter-circle-outline.svg","Icons/filter-circle-sharp.svg","Icons/filter-circle.svg","Icons/filter-outline.svg","Icons/filter-sharp.svg","Icons/filter.svg","Icons/finger-print-outline.svg","Icons/finger-print-sharp.svg","Icons/finger-print.svg","Icons/fish-outline.svg","Icons/fish-sharp.svg","Icons/fish.svg","Icons/fitness-outline.svg","Icons/fitness-sharp.svg","Icons/fitness.svg","Icons/flag-outline.svg","Icons/flag-sharp.svg","Icons/flag.svg","Icons/flame-outline.svg","Icons/flame-sharp.svg","Icons/flame.svg","Icons/flash-off-outline.svg","Icons/flash-off-sharp.svg","Icons/flash-off.svg","Icons/flash-outline.svg","Icons/flash-sharp.svg","Icons/flash.svg","Icons/flashlight-outline.svg","Icons/flashlight-sharp.svg","Icons/flashlight.svg","Icons/flask-outline.svg","Icons/flask-sharp.svg","Icons/flask.svg","Icons/flower-outline.svg","Icons/flower-sharp.svg","Icons/flower.svg","Icons/folder-open-outline.svg","Icons/folder-open-sharp.svg","Icons/folder-open.svg","Icons/folder-outline.svg","Icons/folder-sharp.svg","Icons/folder.svg","Icons/football-outline.svg","Icons/football-sharp.svg","Icons/football.svg","Icons/footsteps-outline.svg","Icons/footsteps-sharp.svg","Icons/footsteps.svg","Icons/funnel-outline.svg","Icons/funnel-sharp.svg","Icons/funnel.svg","Icons/game-controller-outline.svg","Icons/game-controller-sharp.svg","Icons/game-controller.svg","Icons/gift-outline.svg","Icons/gift-sharp.svg","Icons/gift.svg","Icons/git-branch-outline.svg","Icons/git-branch-sharp.svg","Icons/git-branch.svg","Icons/git-commit-outline.svg","Icons/git-commit-sharp.svg","Icons/git-commit.svg","Icons/git-compare-outline.svg","Icons/git-compare-sharp.svg","Icons/git-compare.svg","Icons/git-merge-outline.svg","Icons/git-merge-sharp.svg","Icons/git-merge.svg","Icons/git-network-outline.svg","Icons/git-network-sharp.svg","Icons/git-network.svg","Icons/git-pull-request-outline.svg","Icons/git-pull-request-sharp.svg","Icons/git-pull-request.svg","Icons/glasses-outline.svg","Icons/glasses-sharp.svg","Icons/glasses.svg","Icons/globe-outline.svg","Icons/globe-sharp.svg","Icons/globe.svg","Icons/golf-outline.svg","Icons/golf-sharp.svg","Icons/golf.svg","Icons/grid-outline.svg","Icons/grid-sharp.svg","Icons/grid.svg","Icons/hammer-outline.svg","Icons/hammer-sharp.svg","Icons/hammer.svg","Icons/hand-left-outline.svg","Icons/hand-left-sharp.svg","Icons/hand-left.svg","Icons/hand-right-outline.svg","Icons/hand-right-sharp.svg","Icons/hand-right.svg","Icons/happy-outline.svg","Icons/happy-sharp.svg","Icons/happy.svg","Icons/hardware-chip-outline.svg","Icons/hardware-chip-sharp.svg","Icons/hardware-chip.svg","Icons/headset-outline.svg","Icons/headset-sharp.svg","Icons/headset.svg","Icons/heart-circle-outline.svg","Icons/heart-circle-sharp.svg","Icons/heart-circle.svg","Icons/heart-dislike-circle-outline.svg","Icons/heart-dislike-circle-sharp.svg","Icons/heart-dislike-circle.svg","Icons/heart-dislike-outline.svg","Icons/heart-dislike-sharp.svg","Icons/heart-dislike.svg","Icons/heart-half-outline.svg","Icons/heart-half-sharp.svg","Icons/heart-half.svg","Icons/heart-outline.svg","Icons/heart-sharp.svg","Icons/heart.svg","Icons/help-buoy-outline.svg","Icons/help-buoy-sharp.svg","Icons/help-buoy.svg","Icons/help-circle-outline.svg","Icons/help-circle-sharp.svg","Icons/help-circle.svg","Icons/help-outline.svg","Icons/help-sharp.svg","Icons/help.svg","Icons/home-outline.svg","Icons/home-sharp.svg","Icons/home.svg","Icons/hourglass-outline.svg","Icons/hourglass-sharp.svg","Icons/hourglass.svg","Icons/ice-cream-outline.svg","Icons/ice-cream-sharp.svg","Icons/ice-cream.svg","Icons/id-card-outline.svg","Icons/id-card-sharp.svg","Icons/id-card.svg","Icons/image-outline.svg","Icons/image-sharp.svg","Icons/image.svg","Icons/images-outline.svg","Icons/images-sharp.svg","Icons/images.svg","Icons/infinite-outline.svg","Icons/infinite-sharp.svg","Icons/infinite.svg","Icons/information-circle-outline.svg","Icons/information-circle-sharp.svg","Icons/information-circle.svg","Icons/information-outline.svg","Icons/information-sharp.svg","Icons/information.svg","Icons/invert-mode-outline.svg","Icons/invert-mode-sharp.svg","Icons/invert-mode.svg","Icons/journal-outline.svg","Icons/journal-sharp.svg","Icons/journal.svg","Icons/key-outline.svg","Icons/key-sharp.svg","Icons/key.svg","Icons/keypad-outline.svg","Icons/keypad-sharp.svg","Icons/keypad.svg","Icons/language-outline.svg","Icons/language-sharp.svg","Icons/language.svg","Icons/laptop-outline.svg","Icons/laptop-sharp.svg","Icons/laptop.svg","Icons/layers-outline.svg","Icons/layers-sharp.svg","Icons/layers.svg","Icons/leaf-outline.svg","Icons/leaf-sharp.svg","Icons/leaf.svg","Icons/library-outline.svg","Icons/library-sharp.svg","Icons/library.svg","Icons/link-outline.svg","Icons/link-sharp.svg","Icons/link.svg","Icons/list-circle-outline.svg","Icons/list-circle-sharp.svg","Icons/list-circle.svg","Icons/list-outline.svg","Icons/list-sharp.svg","Icons/list.svg","Icons/locate-outline.svg","Icons/locate-sharp.svg","Icons/locate.svg","Icons/location-outline.svg","Icons/location-sharp.svg","Icons/location.svg","Icons/lock-closed-outline.svg","Icons/lock-closed-sharp.svg","Icons/lock-closed.svg","Icons/lock-open-outline.svg","Icons/lock-open-sharp.svg","Icons/lock-open.svg","Icons/log-in-outline.svg","Icons/log-in-sharp.svg","Icons/log-in.svg","Icons/log-out-outline.svg","Icons/log-out-sharp.svg","Icons/log-out.svg","Icons/logo-alipay.svg","Icons/logo-amazon.svg","Icons/logo-amplify.svg","Icons/logo-android.svg","Icons/logo-angular.svg","Icons/logo-apple-appstore.svg","Icons/logo-apple-ar.svg","Icons/logo-apple.svg","Icons/logo-behance.svg","Icons/logo-bitbucket.svg","Icons/logo-bitcoin.svg","Icons/logo-buffer.svg","Icons/logo-capacitor.svg","Icons/logo-chrome.svg","Icons/logo-closed-captioning.svg","Icons/logo-codepen.svg","Icons/logo-css3.svg","Icons/logo-designernews.svg","Icons/logo-deviantart.svg","Icons/logo-discord.svg","Icons/logo-docker.svg","Icons/logo-dribbble.svg","Icons/logo-dropbox.svg","Icons/logo-edge.svg","Icons/logo-electron.svg","Icons/logo-euro.svg","Icons/logo-facebook.svg","Icons/logo-figma.svg","Icons/logo-firebase.svg","Icons/logo-firefox.svg","Icons/logo-flickr.svg","Icons/logo-foursquare.svg","Icons/logo-github.svg","Icons/logo-gitlab.svg","Icons/logo-google-playstore.svg","Icons/logo-google.svg","Icons/logo-hackernews.svg","Icons/logo-html5.svg","Icons/logo-instagram.svg","Icons/logo-ionic.svg","Icons/logo-ionitron.svg","Icons/logo-javascript.svg","Icons/logo-laravel.svg","Icons/logo-linkedin.svg","Icons/logo-markdown.svg","Icons/logo-mastodon.svg","Icons/logo-medium.svg","Icons/logo-microsoft.svg","Icons/logo-no-smoking.svg","Icons/logo-nodejs.svg","Icons/logo-npm.svg","Icons/logo-octocat.svg","Icons/logo-paypal.svg","Icons/logo-pinterest.svg","Icons/logo-playstation.svg","Icons/logo-pwa.svg","Icons/logo-python.svg","Icons/logo-react.svg","Icons/logo-reddit.svg","Icons/logo-rss.svg","Icons/logo-sass.svg","Icons/logo-skype.svg","Icons/logo-slack.svg","Icons/logo-snapchat.svg","Icons/logo-soundcloud.svg","Icons/logo-stackoverflow.svg","Icons/logo-steam.svg","Icons/logo-stencil.svg","Icons/logo-tableau.svg","Icons/logo-tiktok.svg","Icons/logo-tumblr.svg","Icons/logo-tux.svg","Icons/logo-twitch.svg","Icons/logo-twitter.svg","Icons/logo-usd.svg","Icons/logo-venmo.svg","Icons/logo-vercel.svg","Icons/logo-vimeo.svg","Icons/logo-vk.svg","Icons/logo-vue.svg","Icons/logo-web-component.svg","Icons/logo-wechat.svg","Icons/logo-whatsapp.svg","Icons/logo-windows.svg","Icons/logo-wordpress.svg","Icons/logo-xbox.svg","Icons/logo-xing.svg","Icons/logo-yahoo.svg","Icons/logo-yen.svg","Icons/logo-youtube.svg","Icons/magnet-outline.svg","Icons/magnet-sharp.svg","Icons/magnet.svg","Icons/mail-open-outline.svg","Icons/mail-open-sharp.svg","Icons/mail-open.svg","Icons/mail-outline.svg","Icons/mail-sharp.svg","Icons/mail-unread-outline.svg","Icons/mail-unread-sharp.svg","Icons/mail-unread.svg","Icons/mail.svg","Icons/male-female-outline.svg","Icons/male-female-sharp.svg","Icons/male-female.svg","Icons/male-outline.svg","Icons/male-sharp.svg","Icons/male.svg","Icons/man-outline.svg","Icons/man-sharp.svg","Icons/man.svg","Icons/map-outline.svg","Icons/map-sharp.svg","Icons/map.svg","Icons/medal-outline.svg","Icons/medal-sharp.svg","Icons/medal.svg","Icons/medical-outline.svg","Icons/medical-sharp.svg","Icons/medical.svg","Icons/medkit-outline.svg","Icons/medkit-sharp.svg","Icons/medkit.svg","Icons/megaphone-outline.svg","Icons/megaphone-sharp.svg","Icons/megaphone.svg","Icons/menu-outline.svg","Icons/menu-sharp.svg","Icons/menu.svg","Icons/mic-circle-outline.svg","Icons/mic-circle-sharp.svg","Icons/mic-circle.svg","Icons/mic-off-circle-outline.svg","Icons/mic-off-circle-sharp.svg","Icons/mic-off-circle.svg","Icons/mic-off-outline.svg","Icons/mic-off-sharp.svg","Icons/mic-off.svg","Icons/mic-outline.svg","Icons/mic-sharp.svg","Icons/mic.svg","Icons/moon-outline.svg","Icons/moon-sharp.svg","Icons/moon.svg","Icons/move-outline.svg","Icons/move-sharp.svg","Icons/move.svg","Icons/musical-note-outline.svg","Icons/musical-note-sharp.svg","Icons/musical-note.svg","Icons/musical-notes-outline.svg","Icons/musical-notes-sharp.svg","Icons/musical-notes.svg","Icons/navigate-circle-outline.svg","Icons/navigate-circle-sharp.svg","Icons/navigate-circle.svg","Icons/navigate-outline.svg","Icons/navigate-sharp.svg","Icons/navigate.svg","Icons/newspaper-outline.svg","Icons/newspaper-sharp.svg","Icons/newspaper.svg","Icons/notifications-circle-outline.svg","Icons/notifications-circle-sharp.svg","Icons/notifications-circle.svg","Icons/notifications-off-circle-outline.svg","Icons/notifications-off-circle-sharp.svg","Icons/notifications-off-circle.svg","Icons/notifications-off-outline.svg","Icons/notifications-off-sharp.svg","Icons/notifications-off.svg","Icons/notifications-outline.svg","Icons/notifications-sharp.svg","Icons/notifications.svg","Icons/nuclear-outline.svg","Icons/nuclear-sharp.svg","Icons/nuclear.svg","Icons/nutrition-outline.svg","Icons/nutrition-sharp.svg","Icons/nutrition.svg","Icons/open-outline.svg","Icons/open-sharp.svg","Icons/open.svg","Icons/options-outline.svg","Icons/options-sharp.svg","Icons/options.svg","Icons/paper-plane-outline.svg","Icons/paper-plane-sharp.svg","Icons/paper-plane.svg","Icons/partly-sunny-outline.svg","Icons/partly-sunny-sharp.svg","Icons/partly-sunny.svg","Icons/pause-circle-outline.svg","Icons/pause-circle-sharp.svg","Icons/pause-circle.svg","Icons/pause-outline.svg","Icons/pause-sharp.svg","Icons/pause.svg","Icons/paw-outline.svg","Icons/paw-sharp.svg","Icons/paw.svg","Icons/pencil-outline.svg","Icons/pencil-sharp.svg","Icons/pencil.svg","Icons/people-circle-outline.svg","Icons/people-circle-sharp.svg","Icons/people-circle.svg","Icons/people-outline.svg","Icons/people-sharp.svg","Icons/people.svg","Icons/person-add-outline.svg","Icons/person-add-sharp.svg","Icons/person-add.svg","Icons/person-circle-outline.svg","Icons/person-circle-sharp.svg","Icons/person-circle.svg","Icons/person-outline.svg","Icons/person-remove-outline.svg","Icons/person-remove-sharp.svg","Icons/person-remove.svg","Icons/person-sharp.svg","Icons/person.svg","Icons/phone-landscape-outline.svg","Icons/phone-landscape-sharp.svg","Icons/phone-landscape.svg","Icons/phone-portrait-outline.svg","Icons/phone-portrait-sharp.svg","Icons/phone-portrait.svg","Icons/pie-chart-outline.svg","Icons/pie-chart-sharp.svg","Icons/pie-chart.svg","Icons/pin-outline.svg","Icons/pin-sharp.svg","Icons/pin.svg","Icons/pint-outline.svg","Icons/pint-sharp.svg","Icons/pint.svg","Icons/pizza-outline.svg","Icons/pizza-sharp.svg","Icons/pizza.svg","Icons/planet-outline.svg","Icons/planet-sharp.svg","Icons/planet.svg","Icons/play-back-circle-outline.svg","Icons/play-back-circle-sharp.svg","Icons/play-back-circle.svg","Icons/play-back-outline.svg","Icons/play-back-sharp.svg","Icons/play-back.svg","Icons/play-circle-outline.svg","Icons/play-circle-sharp.svg","Icons/play-circle.svg","Icons/play-forward-circle-outline.svg","Icons/play-forward-circle-sharp.svg","Icons/play-forward-circle.svg","Icons/play-forward-outline.svg","Icons/play-forward-sharp.svg","Icons/play-forward.svg","Icons/play-outline.svg","Icons/play-sharp.svg","Icons/play-skip-back-circle-outline.svg","Icons/play-skip-back-circle-sharp.svg","Icons/play-skip-back-circle.svg","Icons/play-skip-back-outline.svg","Icons/play-skip-back-sharp.svg","Icons/play-skip-back.svg","Icons/play-skip-forward-circle-outline.svg","Icons/play-skip-forward-circle-sharp.svg","Icons/play-skip-forward-circle.svg","Icons/play-skip-forward-outline.svg","Icons/play-skip-forward-sharp.svg","Icons/play-skip-forward.svg","Icons/play.svg","Icons/podium-outline.svg","Icons/podium-sharp.svg","Icons/podium.svg","Icons/power-outline.svg","Icons/power-sharp.svg","Icons/power.svg","Icons/pricetag-outline.svg","Icons/pricetag-sharp.svg","Icons/pricetag.svg","Icons/pricetags-outline.svg","Icons/pricetags-sharp.svg","Icons/pricetags.svg","Icons/print-outline.svg","Icons/print-sharp.svg","Icons/print.svg","Icons/prism-outline.svg","Icons/prism-sharp.svg","Icons/prism.svg","Icons/pulse-outline.svg","Icons/pulse-sharp.svg","Icons/pulse.svg","Icons/push-outline.svg","Icons/push-sharp.svg","Icons/push.svg","Icons/qr-code-outline.svg","Icons/qr-code-sharp.svg","Icons/qr-code.svg","Icons/radio-button-off-outline.svg","Icons/radio-button-off-sharp.svg","Icons/radio-button-off.svg","Icons/radio-button-on-outline.svg","Icons/radio-button-on-sharp.svg","Icons/radio-button-on.svg","Icons/radio-outline.svg","Icons/radio-sharp.svg","Icons/radio.svg","Icons/rainy-outline.svg","Icons/rainy-sharp.svg","Icons/rainy.svg","Icons/reader-outline.svg","Icons/reader-sharp.svg","Icons/reader.svg","Icons/receipt-outline.svg","Icons/receipt-sharp.svg","Icons/receipt.svg","Icons/recording-outline.svg","Icons/recording-sharp.svg","Icons/recording.svg","Icons/refresh-circle-outline.svg","Icons/refresh-circle-sharp.svg","Icons/refresh-circle.svg","Icons/refresh-outline.svg","Icons/refresh-sharp.svg","Icons/refresh.svg","Icons/reload-circle-outline.svg","Icons/reload-circle-sharp.svg","Icons/reload-circle.svg","Icons/reload-outline.svg","Icons/reload-sharp.svg","Icons/reload.svg","Icons/remove-circle-outline.svg","Icons/remove-circle-sharp.svg","Icons/remove-circle.svg","Icons/remove-outline.svg","Icons/remove-sharp.svg","Icons/remove.svg","Icons/reorder-four-outline.svg","Icons/reorder-four-sharp.svg","Icons/reorder-four.svg","Icons/reorder-three-outline.svg","Icons/reorder-three-sharp.svg","Icons/reorder-three.svg","Icons/reorder-two-outline.svg","Icons/reorder-two-sharp.svg","Icons/reorder-two.svg","Icons/repeat-outline.svg","Icons/repeat-sharp.svg","Icons/repeat.svg","Icons/resize-outline.svg","Icons/resize-sharp.svg","Icons/resize.svg","Icons/restaurant-outline.svg","Icons/restaurant-sharp.svg","Icons/restaurant.svg","Icons/return-down-back-outline.svg","Icons/return-down-back-sharp.svg","Icons/return-down-back.svg","Icons/return-down-forward-outline.svg","Icons/return-down-forward-sharp.svg","Icons/return-down-forward.svg","Icons/return-up-back-outline.svg","Icons/return-up-back-sharp.svg","Icons/return-up-back.svg","Icons/return-up-forward-outline.svg","Icons/return-up-forward-sharp.svg","Icons/return-up-forward.svg","Icons/ribbon-outline.svg","Icons/ribbon-sharp.svg","Icons/ribbon.svg","Icons/rocket-outline.svg","Icons/rocket-sharp.svg","Icons/rocket.svg","Icons/rose-outline.svg","Icons/rose-sharp.svg","Icons/rose.svg","Icons/sad-outline.svg","Icons/sad-sharp.svg","Icons/sad.svg","Icons/save-outline.svg","Icons/save-sharp.svg","Icons/save.svg","Icons/scale-outline.svg","Icons/scale-sharp.svg","Icons/scale.svg","Icons/scan-circle-outline.svg","Icons/scan-circle-sharp.svg","Icons/scan-circle.svg","Icons/scan-outline.svg","Icons/scan-sharp.svg","Icons/scan.svg","Icons/school-outline.svg","Icons/school-sharp.svg","Icons/school.svg","Icons/search-circle-outline.svg","Icons/search-circle-sharp.svg","Icons/search-circle.svg","Icons/search-outline.svg","Icons/search-sharp.svg","Icons/search.svg","Icons/send-outline.svg","Icons/send-sharp.svg","Icons/send.svg","Icons/server-outline.svg","Icons/server-sharp.svg","Icons/server.svg","Icons/settings-outline.svg","Icons/settings-sharp.svg","Icons/settings.svg","Icons/shapes-outline.svg","Icons/shapes-sharp.svg","Icons/shapes.svg","Icons/share-outline.svg","Icons/share-sharp.svg","Icons/share-social-outline.svg","Icons/share-social-sharp.svg","Icons/share-social.svg","Icons/share.svg","Icons/shield-checkmark-outline.svg","Icons/shield-checkmark-sharp.svg","Icons/shield-checkmark.svg","Icons/shield-half-outline.svg","Icons/shield-half-sharp.svg","Icons/shield-half.svg","Icons/shield-outline.svg","Icons/shield-sharp.svg","Icons/shield.svg","Icons/shirt-outline.svg","Icons/shirt-sharp.svg","Icons/shirt.svg","Icons/shuffle-outline.svg","Icons/shuffle-sharp.svg","Icons/shuffle.svg","Icons/skull-outline.svg","Icons/skull-sharp.svg","Icons/skull.svg","Icons/snow-outline.svg","Icons/snow-sharp.svg","Icons/snow.svg","Icons/sparkles-outline.svg","Icons/sparkles-sharp.svg","Icons/sparkles.svg","Icons/speedometer-outline.svg","Icons/speedometer-sharp.svg","Icons/speedometer.svg","Icons/square-outline.svg","Icons/square-sharp.svg","Icons/square.svg","Icons/star-half-outline.svg","Icons/star-half-sharp.svg","Icons/star-half.svg","Icons/star-outline.svg","Icons/star-sharp.svg","Icons/star.svg","Icons/stats-chart-outline.svg","Icons/stats-chart-sharp.svg","Icons/stats-chart.svg","Icons/stop-circle-outline.svg","Icons/stop-circle-sharp.svg","Icons/stop-circle.svg","Icons/stop-outline.svg","Icons/stop-sharp.svg","Icons/stop.svg","Icons/stopwatch-outline.svg","Icons/stopwatch-sharp.svg","Icons/stopwatch.svg","Icons/storefront-outline.svg","Icons/storefront-sharp.svg","Icons/storefront.svg","Icons/subway-outline.svg","Icons/subway-sharp.svg","Icons/subway.svg","Icons/sunny-outline.svg","Icons/sunny-sharp.svg","Icons/sunny.svg","Icons/swap-horizontal-outline.svg","Icons/swap-horizontal-sharp.svg","Icons/swap-horizontal.svg","Icons/swap-vertical-outline.svg","Icons/swap-vertical-sharp.svg","Icons/swap-vertical.svg","Icons/sync-circle-outline.svg","Icons/sync-circle-sharp.svg","Icons/sync-circle.svg","Icons/sync-outline.svg","Icons/sync-sharp.svg","Icons/sync.svg","Icons/tablet-landscape-outline.svg","Icons/tablet-landscape-sharp.svg","Icons/tablet-landscape.svg","Icons/tablet-portrait-outline.svg","Icons/tablet-portrait-sharp.svg","Icons/tablet-portrait.svg","Icons/telescope-outline.svg","Icons/telescope-sharp.svg","Icons/telescope.svg","Icons/tennisball-outline.svg","Icons/tennisball-sharp.svg","Icons/tennisball.svg","Icons/terminal-outline.svg","Icons/terminal-sharp.svg","Icons/terminal.svg","Icons/text-outline.svg","Icons/text-sharp.svg","Icons/text.svg","Icons/thermometer-outline.svg","Icons/thermometer-sharp.svg","Icons/thermometer.svg","Icons/thumbs-down-outline.svg","Icons/thumbs-down-sharp.svg","Icons/thumbs-down.svg","Icons/thumbs-up-outline.svg","Icons/thumbs-up-sharp.svg","Icons/thumbs-up.svg","Icons/thunderstorm-outline.svg","Icons/thunderstorm-sharp.svg","Icons/thunderstorm.svg","Icons/ticket-outline.svg","Icons/ticket-sharp.svg","Icons/ticket.svg","Icons/time-outline.svg","Icons/time-sharp.svg","Icons/time.svg","Icons/timer-outline.svg","Icons/timer-sharp.svg","Icons/timer.svg","Icons/today-outline.svg","Icons/today-sharp.svg","Icons/today.svg","Icons/toggle-outline.svg","Icons/toggle-sharp.svg","Icons/toggle.svg","Icons/trail-sign-outline.svg","Icons/trail-sign-sharp.svg","Icons/trail-sign.svg","Icons/train-outline.svg","Icons/train-sharp.svg","Icons/train.svg","Icons/transgender-outline.svg","Icons/transgender-sharp.svg","Icons/transgender.svg","Icons/trash-bin-outline.svg","Icons/trash-bin-sharp.svg","Icons/trash-bin.svg","Icons/trash-outline.svg","Icons/trash-sharp.svg","Icons/trash.svg","Icons/trending-down-outline.svg","Icons/trending-down-sharp.svg","Icons/trending-down.svg","Icons/trending-up-outline.svg","Icons/trending-up-sharp.svg","Icons/trending-up.svg","Icons/triangle-outline.svg","Icons/triangle-sharp.svg","Icons/triangle.svg","Icons/trophy-outline.svg","Icons/trophy-sharp.svg","Icons/trophy.svg","Icons/tv-outline.svg","Icons/tv-sharp.svg","Icons/tv.svg","Icons/umbrella-outline.svg","Icons/umbrella-sharp.svg","Icons/umbrella.svg","Icons/unlink-outline.svg","Icons/unlink-sharp.svg","Icons/unlink.svg","Icons/videocam-off-outline.svg","Icons/videocam-off-sharp.svg","Icons/videocam-off.svg","Icons/videocam-outline.svg","Icons/videocam-sharp.svg","Icons/videocam.svg","Icons/volume-high-outline.svg","Icons/volume-high-sharp.svg","Icons/volume-high.svg","Icons/volume-low-outline.svg","Icons/volume-low-sharp.svg","Icons/volume-low.svg","Icons/volume-medium-outline.svg","Icons/volume-medium-sharp.svg","Icons/volume-medium.svg","Icons/volume-mute-outline.svg","Icons/volume-mute-sharp.svg","Icons/volume-mute.svg","Icons/volume-off-outline.svg","Icons/volume-off-sharp.svg","Icons/volume-off.svg","Icons/walk-outline.svg","Icons/walk-sharp.svg","Icons/walk.svg","Icons/wallet-outline.svg","Icons/wallet-sharp.svg","Icons/wallet.svg","Icons/warning-outline.svg","Icons/warning-sharp.svg","Icons/warning.svg","Icons/watch-outline.svg","Icons/watch-sharp.svg","Icons/watch.svg","Icons/water-outline.svg","Icons/water-sharp.svg","Icons/water.svg","Icons/wifi-outline.svg","Icons/wifi-sharp.svg","Icons/wifi.svg","Icons/wine-outline.svg","Icons/wine-sharp.svg","Icons/wine.svg","Icons/woman-outline.svg","Icons/woman-sharp.svg","Icons/woman.svg","OIP.jpeg","assets/bg.png","assets/lock.svg","assets/mail.svg","assets/user.svg","bank.png","favicon.ico","home.png","inventory.png","invoice.jpeg","invoice.png","logo.jpg"]),
	mimeTypes: {".svg":"image/svg+xml",".jpeg":"image/jpeg",".png":"image/png",".ico":"image/vnd.microsoft.icon",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.25f49edc.js","app":"_app/immutable/entry/app.bd2d43aa.js","imports":["_app/immutable/entry/start.25f49edc.js","_app/immutable/chunks/index.8b941a8b.js","_app/immutable/chunks/singletons.0502b1ed.js","_app/immutable/chunks/index.e586407d.js","_app/immutable/chunks/control.f2d6eca3.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.bd2d43aa.js","_app/immutable/chunks/index.8b941a8b.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js'),
			() => import('../server/nodes/4.js'),
			() => import('../server/nodes/5.js'),
			() => import('../server/nodes/6.js'),
			() => import('../server/nodes/7.js'),
			() => import('../server/nodes/8.js'),
			() => import('../server/nodes/9.js'),
			() => import('../server/nodes/10.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/Banking",
				pattern: /^\/Banking\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/Inventory",
				pattern: /^\/Inventory\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/Login",
				pattern: /^\/Login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/Signup",
				pattern: /^\/Signup\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/api/modify-data",
				pattern: /^\/api\/modify-data\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../server/entries/endpoints/api/modify-data/_server.ts.js')
			},
			{
				id: "/api/read-data",
				pattern: /^\/api\/read-data\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../server/entries/endpoints/api/read-data/_server.ts.js')
			},
			{
				id: "/api/read-inventory-data",
				pattern: /^\/api\/read-inventory-data\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../server/entries/endpoints/api/read-inventory-data/_server.ts.js')
			},
			{
				id: "/invoices",
				pattern: /^\/invoices\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/invoices/create-invoice",
				pattern: /^\/invoices\/create-invoice\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/invoices/[invoiceId]",
				pattern: /^\/invoices\/([^/]+?)\/?$/,
				params: [{"name":"invoiceId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/password-hasher",
				pattern: /^\/password-hasher\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
