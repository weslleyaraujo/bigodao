class Subtitle

    @@subtitleBasepath = '/tmp/'

    def getSubtitle (imdId)
        begin
           # system 'getsub --search-by i '+imdId+' --force'

            #subtitleName = moveSubtitle(imdId)

                parseSubtitle('/tmp/'+imdId+'.srt')
                filePrepend('/tmp/'+imdId+'.srt', "ueba\n\n")
          #  if ('' != subtitleName)
          #      parseSubtitle('/tmp/'+imdId+'.srt')
                #filePrepend(subtitleName, "ueba\n\n")
          #  end

            return true
        rescue
            return false
        end
    end

    private

    def moveSubtitle (imdId)
        begin
            finalName = imdId+'.srt'
            system 'mv .srtt.* ' + finalName
            return finalName
        rescue
            return ''
        end
    end

    def parseSubtitle (file)

        file = File.open(file)
        contents = ""
        file.each {|line|
            if (line.include? "-->")
                line = line.gsub(",", ".")
            end
            contents << line
        }
        fileWrite(file, contents)
    end

    def filePrepend(file, str)
        new_contents = ""
        File.open(file, 'r') do |fd|
            contents = fd.read
            new_contents = str << contents
        end
        fileWrite(file, new_contents)
    end

    def fileWrite (file, new_contents)
        File.open(file, 'w') do |fd|
            fd.write(new_contents)
        end
    end

end
