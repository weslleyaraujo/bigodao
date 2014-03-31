class Subtitle

    @@subtitleBasepath = '/tmp/'

    def getSubtitle (imdId)
        begin
            system 'getsub --search-by i '+imdId+' --force'

            subtitleName = moveSubtitle(imdId)

            if ('' != subtitleName)
                parseSubtitle(subtitleName)
            end

            return true
        rescue
            return false
        end
    end

    private

    def moveSubtitle (imdId)
        begin
            finalName = @@subtitleBasepath+imdId+'.srt'
            system 'mv .srtt.* ' + finalName
            return finalName
        rescue
            return ''
        end
    end

    def parseSubtitle (subtitle)
        system "sed -i '1s/^/task goes here\n\n/' " + subtitle
        system "sed -i '/.*[0-9] --> [0-9].*/ s/\./,/g' " + subtitle
    end

end
