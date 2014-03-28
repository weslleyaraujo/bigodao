class Subtitle

    @@subtitleBasepath = '/tmp/'

    def getSubtitle (imdId)
        begin
            system 'getsub --search-by i '+imdId+' --force'

            if ('' == moveSubtitle(imdId))
                puts 'UHUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU' 
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

end
