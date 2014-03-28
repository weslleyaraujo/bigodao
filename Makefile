install:
	bundle
	bower install

dev:
	# is there a nohup?
	touch nohup.out
	nohup compass watch&
	rerun app.rb
