install:
	bundle
	bower install

dev:
	# is there a nohup?
	if [ -a nohup.out ] ; \
		then \
		rm nohup.out ; \
	fi;
	touch nohup.out
	nohup compass watch&
	rerun app.rb
