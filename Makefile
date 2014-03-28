install:
	bundle
	bower install
	sudo npm install -g peerflix

dev:
	# is there a nohup?
	touch nohup.out
	nohup compass watch&
	rerun app.rb
