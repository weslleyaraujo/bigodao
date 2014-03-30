install:
	bundle
	bower install
	sudo npm install -g peerflix@0.1.4

dev:
	# is there a nohup?
	touch nohup.out
	nohup compass watch&
	rerun app.rb
